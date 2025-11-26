"use client";

import * as React from "react";

import { ResponsiveContainer, Tooltip, Legend } from "recharts";
import type { TooltipProps } from "recharts/types/component/Tooltip";

import { cn } from "./utils";

/* -------------------------------------------------------
    CUSTOM SAFE TYPES (No dependency on Recharts internals)
---------------------------------------------------------*/

// Minimal safe legend item
export interface LegendPayloadItem {
  value?: string | number;
  id?: string;
  type?: string;
  color?: string;
  dataKey?: string;
  [key: string]: unknown;
}

// Safe legend props (instead of LegendProps<T, N>)
export interface LegendPropsFixed {
  payload?: LegendPayloadItem[] | undefined;
  className?: string;
  hideIcon?: boolean;
  nameKey?: string;
}

const THEMES = { light: "", dark: ".dark" } as const;

/* -------------------------------------------------------
    Chart Config Context
---------------------------------------------------------*/

export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType | null;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) throw new Error("useChart must be used inside <ChartContainer>");
  return ctx;
}

/* -------------------------------------------------------
    CONTAINER
---------------------------------------------------------*/

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ReactElement;
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn(
          "flex aspect-video justify-center text-xs",
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

/* -------------------------------------------------------
    DYNAMIC STYLE INJECTION
---------------------------------------------------------*/

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, item]) => (item as any).color || (item as any).theme
  );

  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, selector]) => `
${selector} [data-chart="${id}"] {
${colorConfig
                .map(([key, item]) => {
                  const color =
                    (item as any).theme?.[theme as keyof typeof THEMES] || (item as any).color;
                  return color ? `  --color-${key}: ${color};` : "";
                })
                .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = Tooltip;

/* -------------------------------------------------------
    TOOLTIP CONTENT (SAFE)
---------------------------------------------------------*/

type SafePayload = {
  name?: string;
  dataKey?: string;
  value?: unknown;
  color?: string;
  [key: string]: unknown;
};

function ChartTooltipContent({
  active,
  payload,
  className,
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  nameKey,
  labelKey,
}: TooltipProps<any, string> & {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  nameKey?: string;
  labelKey?: string;
  className?: string;
}) {

  const { config } = useChart();

  if (!active || !payload?.length) return null;

  const first = payload[0] as SafePayload;
  const derivedKey = String(labelKey ?? first.name ?? first.dataKey ?? "value");
  const itemConfig = config[derivedKey];

  return (
    <div
      className={cn(
        "border-border/50 bg-background min-w-[8rem] rounded-lg border px-2 py-1.5 text-xs shadow-xl",
        className
      )}
    >
      {!hideLabel && (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter ? labelFormatter(label ?? "", payload) : itemConfig?.label}
        </div>
      )}

      <div className="mt-1">
        {(payload as SafePayload[]).map((entry, index) => {
          const key = String(nameKey ?? entry.name ?? entry.dataKey ?? "value");
          const cfg = config[key];

          const entryColor =
            (entry.color as string) ||
            ((cfg as any)?.color as string) ||
            "#999";


          const finalValue = formatter
            ? formatter(entry.value, entry.name ?? "", entry as any, index, payload)
            : entry.value;

          return (
            <div key={index} className="flex items-center justify-between gap-2">
              {!hideIndicator && (
                <div
                  className="h-2 w-2 rounded-sm"
                  style={{ background: entryColor }}
                />
              )}

              <span className="text-muted-foreground">
                {cfg?.label ?? entry.name}
              </span>

              <span className="font-mono font-medium text-foreground">
                {typeof finalValue === "number"
                  ? finalValue.toLocaleString()
                  : String(finalValue ?? "")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------
    LEGEND CONTENT (SAFE)
---------------------------------------------------------*/

const ChartLegend = Legend;

function ChartLegendContent({
  payload,
  className,
  hideIcon = false,
  nameKey,
}: LegendPropsFixed) {
  const { config } = useChart();

  if (!payload || payload.length === 0) return null;

  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      {payload.map((item, index) => {
        const key = String(nameKey ?? item.dataKey ?? item.value ?? index);
        const cfg = config[key];

        return (
          <div key={index} className="flex items-center gap-2">
            {!hideIcon ? (
              cfg?.icon ? (
                <cfg.icon />
              ) : (
                <span
                  className="h-2 w-2 rounded-sm"
                  style={{ backgroundColor: item.color }}
                />
              )
            ) : null}

            <span>{cfg?.label ?? String(item.value ?? "")}</span>
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------
    EXPORTS
---------------------------------------------------------*/

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
