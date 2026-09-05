"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

export type InquiryField = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  /** Renders as a row of selectable chips rather than a text input. */
  choices?: string[];
  /** Renders as a textarea. */
  multiline?: boolean;
  /** Occupy the full row rather than half of a two-column pair. */
  full?: boolean;
};

type Status = "idle" | "submitting" | "sent";

/**
 * One inquiry form, configured per context — general contact, research
 * partnership, or investor.
 *
 * There is no server behind this yet, so rather than pretending a message was
 * delivered, submission composes the enquiry and hands it to the visitor's
 * mail client addressed to `site.email`. It genuinely works today with no
 * service, key, or deployment dependency.
 *
 * To move to a backend, replace the body of `onSubmit` with a POST to a route
 * handler — the field names are already the payload.
 */
export function InquiryForm({
  fields,
  subjectPrefix,
  submitLabel = "Start a Conversation",
  tone = "light",
  privacyNote = "We use what you send only to respond. Nothing is shared with anyone else.",
}: {
  fields: InquiryField[];
  /** Prefixes the composed email subject, e.g. "Research partnership". */
  subjectPrefix: string;
  submitLabel?: string;
  tone?: "light" | "dark";
  privacyNote?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const dark = tone === "dark";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const data = new FormData(event.currentTarget);
    const read = (key: string) => String(data.get(key) ?? "").trim();

    const who = read("organization") || read("firm") || read("name") || "website";
    const subject = `${subjectPrefix} — ${who}`;
    const body = [
      ...fields
        .filter((f) => !f.multiline)
        .map((f) => `${f.label}: ${read(f.name) || "—"}`),
      "",
      ...fields.filter((f) => f.multiline).map((f) => read(f.name) || "(no message)"),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => setStatus("sent"), 700);
  };

  if (status === "sent") {
    return (
      <div
        className={cn(
          "rounded-xl border p-8 lg:p-10",
          dark
            ? "border-signal-400/30 bg-white/[0.04]"
            : "border-signal-500/30 bg-signal-50/60",
        )}
        role="status"
      >
        <span
          aria-hidden="true"
          className="inline-flex size-10 items-center justify-center rounded-full bg-signal-500 text-white"
        >
          <svg fill="none" height="12" viewBox="0 0 14 11" width="14">
            <path
              d="M1 5.5L5 9.5L13 1.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </span>
        <h3
          className={cn(
            "mt-6 text-[1.375rem] font-bold tracking-tight",
            dark ? "text-white" : "text-ink-900",
          )}
        >
          Your message is ready to send.
        </h3>
        <p
          className={cn(
            "mt-4 text-[0.9375rem] leading-relaxed",
            dark ? "text-slate-ai-300" : "text-slate-ai-700",
          )}
        >
          We&apos;ve opened your email client with the enquiry filled in — press
          send and it will reach us. If nothing opened, write to{" "}
          <a
            className="font-semibold text-signal-500 underline underline-offset-4"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>{" "}
          directly.
        </p>
        <button
          className="mt-7 text-[0.875rem] font-semibold text-signal-500 transition-colors duration-300 hover:text-signal-400"
          onClick={() => setStatus("idle")}
          type="button"
        >
          Return to the form
        </button>
      </div>
    );
  }

  const pairs: InquiryField[][] = [];
  let buffer: InquiryField[] = [];
  fields.forEach((f) => {
    if (f.full || f.choices || f.multiline) {
      if (buffer.length) pairs.push(buffer), (buffer = []);
      pairs.push([f]);
    } else {
      buffer.push(f);
      if (buffer.length === 2) pairs.push(buffer), (buffer = []);
    }
  });
  if (buffer.length) pairs.push(buffer);

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {pairs.map((row, i) => (
        <div
          className={cn(row.length === 2 && "grid gap-6 sm:grid-cols-2")}
          key={i}
        >
          {row.map((field) =>
            field.choices ? (
              <Choices dark={dark} field={field} key={field.name} />
            ) : field.multiline ? (
              <TextArea dark={dark} field={field} key={field.name} />
            ) : (
              <Field dark={dark} field={field} key={field.name} />
            ),
          )}
        </div>
      ))}

      <div
        className={cn(
          "flex flex-col gap-4 border-t pt-7 sm:flex-row sm:items-center sm:justify-between",
          dark ? "border-white/10" : "border-ink-900/[0.07]",
        )}
      >
        <p
          className={cn(
            "max-w-[38ch] text-[0.75rem] leading-relaxed",
            dark ? "text-slate-ai-400" : "text-slate-ai-500",
          )}
        >
          {privacyNote}
        </p>
        <Button
          disabled={status === "submitting"}
          size="lg"
          type="submit"
          variant={dark ? "inverse" : "primary"}
          withArrow
        >
          {status === "submitting" ? "Sending…" : submitLabel}
        </Button>
      </div>
    </form>
  );
}

const labelClass = (dark: boolean) =>
  cn(
    "text-[0.6875rem] font-semibold uppercase tracking-[0.16em]",
    dark ? "text-slate-ai-400" : "text-slate-ai-500",
  );

const inputClass = (dark: boolean) =>
  cn(
    "mt-3 block w-full rounded-md border px-4 py-3 text-[0.9375rem] transition-colors duration-300",
    dark
      ? "border-white/15 bg-white/[0.04] text-white placeholder:text-slate-ai-500 hover:border-white/30 focus:border-signal-400"
      : "border-ink-900/12 bg-white text-ink-900 placeholder:text-slate-ai-500 hover:border-ink-900/25 focus:border-signal-500",
  );

function Label({ field, dark }: { field: InquiryField; dark: boolean }) {
  return (
    <label className={labelClass(dark)} htmlFor={field.name}>
      {field.label}
      {field.required && (
        <span aria-hidden="true" className="ml-1 text-signal-500">
          *
        </span>
      )}
    </label>
  );
}

function Field({ field, dark }: { field: InquiryField; dark: boolean }) {
  return (
    <div>
      <Label dark={dark} field={field} />
      <input
        autoComplete={field.autoComplete}
        className={inputClass(dark)}
        id={field.name}
        name={field.name}
        placeholder={field.placeholder}
        required={field.required}
        type={field.type ?? "text"}
      />
    </div>
  );
}

function TextArea({ field, dark }: { field: InquiryField; dark: boolean }) {
  return (
    <div>
      <Label dark={dark} field={field} />
      <textarea
        className={cn(inputClass(dark), "resize-y leading-relaxed")}
        id={field.name}
        name={field.name}
        placeholder={field.placeholder}
        required={field.required}
        rows={6}
      />
    </div>
  );
}

function Choices({ field, dark }: { field: InquiryField; dark: boolean }) {
  return (
    <fieldset>
      <legend className={labelClass(dark)}>{field.label}</legend>
      <div className="mt-4 flex flex-wrap gap-2">
        {field.choices?.map((choice, i) => (
          <label className="group cursor-pointer" key={choice}>
            <input
              className="peer sr-only"
              defaultChecked={i === 0}
              name={field.name}
              type="radio"
              value={choice}
            />
            <span
              className={cn(
                "inline-block rounded-md border px-4 py-2.5 text-[0.875rem] font-medium",
                "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                "peer-checked:border-signal-600 peer-checked:bg-signal-600 peer-checked:text-white",
                "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-signal-500",
                dark
                  ? "border-white/15 text-slate-ai-200 group-hover:border-white/35"
                  : "border-ink-900/12 text-ink-700 group-hover:border-ink-900/35",
              )}
            >
              {choice}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
