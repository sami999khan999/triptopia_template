const Page = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;

  return <div className="w-full">{id}</div>;
};

export default Page;
