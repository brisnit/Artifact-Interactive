type ClassValue = string | number | bigint | false | null | undefined;

export function cn(...classes: ClassValue[]) {
  return classes.filter((c): c is string => typeof c === "string" && c.length > 0).join(" ");
}
