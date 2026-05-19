const page = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;

  return <div className="mt-100">Halaman List Berita - {category}</div>;
};

export default page;
