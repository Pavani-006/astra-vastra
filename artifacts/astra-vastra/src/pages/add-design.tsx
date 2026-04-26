import { Layout } from "@/components/layout";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

type FormValues = {
  name: string;
  description: string;
  imageUrl: string;
  fabric: string;
  category: string;
};

const inputBase =
  "w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all";

export default function AddDesign() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const { toast } = useToast();

  const onSubmit = (data: FormValues) => {
    console.log("New design submitted:", data);
    toast({
      title: "Design Added",
      description: `${data.name} has been added to the atelier collection.`,
    });
    reset();
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
              Submit a new piece to the collection. Each design is queued for editorial review.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            </div>

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
                  &#9662;
                </span>
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
                placeholder="e.g. Raw Silk"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="imageUrl"
                className="block text-xs uppercase tracking-[0.25em] text-white/60 ml-1"
              >
                Image URL
              </label>
              <input
                id="imageUrl"
                type="url"
                {...register("imageUrl", { required: true })}
                className={inputBase}
                placeholder="https://..."
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
              className="w-full rounded-full bg-white text-black hover:bg-primary transition-colors tracking-[0.3em] uppercase text-xs py-4 mt-8"
            >
              Submit Design
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
