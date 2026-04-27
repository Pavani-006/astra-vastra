import { useEffect, useState } from "react";
import { BUILTIN_DESIGNS, type Design } from "./designs";

const STORAGE_KEY = "astra-vastra:user-designs";
const UPDATE_EVENT = "astra-vastra:designs-updated";

function readUserDesigns(): Design[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as Design[];
  } catch {
    return [];
  }
}

function writeUserDesigns(items: Design[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(UPDATE_EVENT));
}

export function getUserDesigns(): Design[] {
  return readUserDesigns();
}

export function getAllDesigns(): Design[] {
  return [...readUserDesigns(), ...BUILTIN_DESIGNS];
}

export function getDesignById(id: string | undefined): Design | undefined {
  if (!id) return undefined;
  return getAllDesigns().find((d) => d.id === id);
}

function slugify(name: string): string {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base || `design-${Date.now()}`;
}

export function addUserDesign(input: Omit<Design, "id" | "isUserAdded">): Design {
  const all = getAllDesigns();
  let id = slugify(input.name);
  let suffix = 2;
  while (all.some((d) => d.id === id)) {
    id = `${slugify(input.name)}-${suffix++}`;
  }
  const next: Design = { ...input, id, isUserAdded: true };
  const users = readUserDesigns();
  writeUserDesigns([next, ...users]);
  return next;
}

export function deleteUserDesign(id: string) {
  const users = readUserDesigns().filter((d) => d.id !== id);
  writeUserDesigns(users);
}

export function useDesigns(): Design[] {
  const [designs, setDesigns] = useState<Design[]>(() => getAllDesigns());
  useEffect(() => {
    const sync = () => setDesigns(getAllDesigns());
    window.addEventListener(UPDATE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(UPDATE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return designs;
}

export function formatInr(rupees: number | string): string {
  const num = typeof rupees === "string" ? Number(rupees.replace(/[^\d.]/g, "")) : rupees;
  if (!Number.isFinite(num) || num <= 0) return "On request";
  return `₹${Math.round(num).toLocaleString("en-IN")}`;
}
