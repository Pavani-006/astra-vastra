import { Layout } from "@/components/layout";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { addUserDesign, formatInr } from "@/data/designs-store";
import { useState } from "react";
import { useLocation } from "wouter";

type FormValues = {
  name: string;
  description: string;
  fabric: string;
  category: string;
  price: string;
};

const inputBase =
  "w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all";

const MAX_IMAGE_BYTES = 10 * 1024 * 1024;

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error ?? new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

export default function AddDesign() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  const onPickImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageError(null);
    const file = e.target.files?.[0] ?? null;
    if (!file) {
      setImageFile(null);
      setImagePreview(null);
      return;
    }
    if (!file.type.startsWith("image/")) {
      setImageError("Please choose an image file.");
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      setImageError("Image is too large. Please use one under 10 MB.");
      return;
    }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const onSubmit = async (data: FormValues) => {
    if (!imageFile) {
      setImageError("Please upload a design image.");
      return;
    }
    try {
      const imageDataUrl = await readFileAsDataUrl(imageFile);
      const newDesign = addUserDesign({
        name: data.name.trim(),
        description: data.description.trim(),
        fabric: data.fabric.trim(),
        category: data.category,
        price: formatInr(data.price),
        image: imageDataUrl,
      });
      toast({
        title: "Added to the atelier",
        description: `${newDesign.name} is now part of the collection.`,
      });
      reset();
      setImageFile(null);
      setImagePreview(null);
      navigate(`/design/${newDesign.id}`);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.name === "QuotaExceededError"
            ? "Browser storage is full. Try a smaller image."
            : err.message
          : "Something went wrong saving the design.";
      toast({ title: "Could not save design", description: message });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.4em] uppercase text-xs mb-6">
              Atelier Submission
            </p>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              Add to <span className="text-primary italic">Atelier</span>
            </h1>
            <p className="text-white/60 leading-relaxed max-w-sm mx-auto font-light">
              Submit a new piece. It will appear in the collection immediately.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* IMAGE UPLOAD */}
            <div className="space-y-2">
              <label
                htmlFor="image"
                className="block text-xs uppercase tracking-[0.25em] text-white/60 ml-1"
              >
                Design Image
              </label>
              <label
                htmlFor="image"
                className="group relative block cursor-pointer rounded-2xl border border-dashed border-white/15 hover:border-primary/60 bg-[#0d0d0d] transition-all overflow-hidden"
              >
                {imagePreview ? (
                  <div className="relative aspect-[3/4] w-full">
                    <img
                      src={imagePreview}
                      alt="Selected design preview"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-xs tracking-[0.3em] uppercase text-primary">
                        Replace Image
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center px-6 py-14">
                    <span className="text-primary text-2xl font-serif italic mb-2">+</span>
                    <p className="text-white/70 text-sm mb-1">
                      Click to upload an image
                    </p>
                    <p className="text-white/40 text-[11px] tracking-wider uppercase">
                      PNG, JPG · up to 10 MB
                    </p>
                  </div>
                )}
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={onPickImage}
                  className="sr-only"
                />
              </label>
              {imageError && (
                <p className="text-red-400 text-xs mt-1 ml-1">{imageError}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-[0.25em] text-white/60 ml-1"
              >
                Design Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true })}
                className={inputBase}
                placeholder="e.g. Ivory Echo"
              />
              {errors.name && (
                <p className="text-red-400 text-xs ml-1">Name is required.</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="category"
                  className="block text-xs uppercase tracking-[0.25em] text-white/60 ml-1"
                >
                  Category
                </label>
                <div className="relative">
                  <select
                    id="category"
                    {...register("category", { required: true })}
                    className={`${inputBase} appearance-none pr-12 cursor-pointer`}
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#0d0d0d]">
                      Select a category
                    </option>
                    <option value="Bridal Gown" className="bg-[#0d0d0d]">
                      Bridal Gown
                    </option>
                    <option value="Bridal Lehenga" className="bg-[#0d0d0d]">
                      Bridal Lehenga
                    </option>
                    <option value="Couture Gown" className="bg-[#0d0d0d]">
                      Couture Gown
                    </option>
                    <option value="Fusion Saree" className="bg-[#0d0d0d]">
                      Fusion Saree
                    </option>
                    <option value="Reception" className="bg-[#0d0d0d]">
                      Reception
                    </option>
                  </select>
                  <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-white/40 text-xs">
                    ▾
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="price"
                  className="block text-xs uppercase tracking-[0.25em] text-white/60 ml-1"
                >
                  Price (₹)
                </label>
                <input
                  id="price"
                  type="number"
                  inputMode="numeric"
                  min={0}
                  step={1000}
                  {...register("price", { required: true, min: 1 })}
                  className={inputBase}
                  placeholder="e.g. 350000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="fabric"
                className="block text-xs uppercase tracking-[0.25em] text-white/60 ml-1"
              >
                Fabric
              </label>
              <input
                id="fabric"
                type="text"
                {...register("fabric", { required: true })}
                className={inputBase}
                placeholder="e.g. Raw Silk & Tulle"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-xs uppercase tracking-[0.25em] text-white/60 ml-1"
              >
                Description
              </label>
              <textarea
                id="description"
                {...register("description", { required: true })}
                rows={5}
                className={`${inputBase} resize-none rounded-2xl`}
                placeholder="Detail the cut, drape, and inspiration..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-white text-black hover:bg-primary transition-colors tracking-[0.3em] uppercase text-xs py-4 mt-8 disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : "Submit Design"}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
