import { Layout } from "@/components/layout";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import detailImg from "@assets/image_1777204046337.png";

type FormValues = {
  name: string;
  description: string;
  imageUrl: string;
  fabric: string;
};

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
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-4xl md:text-6xl font-serif mb-8">Add to <span className="text-primary italic">Atelier</span></h1>
            <p className="text-muted-foreground mb-12 max-w-md">
              Submit a new piece to the collection. The design will be queued for editorial review.
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="uppercase tracking-widest text-xs text-muted-foreground">Design Name</Label>
                <Input id="name" {...register("name", { required: true })} className="bg-transparent border-border/50 focus-visible:ring-primary rounded-none" placeholder="e.g. Ivory Echo" />
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fabric" className="uppercase tracking-widest text-xs text-muted-foreground">Fabric / Category</Label>
                  <Input id="fabric" {...register("fabric", { required: true })} className="bg-transparent border-border/50 focus-visible:ring-primary rounded-none" placeholder="e.g. Raw Silk Lehenga" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="imageUrl" className="uppercase tracking-widest text-xs text-muted-foreground">Image URL</Label>
                  <Input id="imageUrl" {...register("imageUrl", { required: true })} className="bg-transparent border-border/50 focus-visible:ring-primary rounded-none" placeholder="https://..." />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="uppercase tracking-widest text-xs text-muted-foreground">Description</Label>
                <Textarea id="description" {...register("description", { required: true })} className="bg-transparent border-border/50 focus-visible:ring-primary rounded-none min-h-[120px]" placeholder="Detail the cut, drape, and inspiration..." />
              </div>

              <Button type="submit" className="w-full rounded-none bg-white text-black hover:bg-primary transition-colors tracking-widest uppercase h-12 mt-4">
                Submit Design
              </Button>
            </form>
          </div>

          <div className="hidden lg:block aspect-[3/4] animate-in fade-in slide-in-from-right-8 duration-1000 overflow-hidden">
            <img src={detailImg} alt="Atelier workspace" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-1000" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
