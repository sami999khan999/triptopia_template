import BlogDetails from "@/components/BlogDetails";

const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;
  return (
    <div className="w-full">
      <BlogDetails blogId={id} />
    </div>
  );
};

export default Page;
