export type ContactStep = "message" | "contact";

export type ContactStatus = "idle" | "sending" | "sent" | "error";

export interface ContactFormState {
  name: string;
  message: string;
  email: string;
}
