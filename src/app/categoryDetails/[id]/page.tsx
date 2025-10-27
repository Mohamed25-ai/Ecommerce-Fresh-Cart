import Image from "next/image";
import CATEGORYIMAGE from "@Images/0.png";
import { getSpecificCategorie } from "../categorie.servise";

type Params = { id: string };
type SearchParams = Record<string, string | string[] | undefined>;

export default async function Page({
  params,
}: {
  params: Promise<Params>;
  searchParams?: Promise<SearchParams>;
}) {
  const { id } = await params;
  const categorieData = await getSpecificCategorie(id);

  return (
    <figure className="container mx-auto h-screen lg:flex items-center justify-between">
      <div className="relative h-[350px] lg:w-1/2">
        <Image
          fill
          className="object-contain"
          src={categorieData?.image || CATEGORYIMAGE}
          alt={categorieData?.name || "Category"}
          priority
        />
      </div>

      <figcaption className="mt-20 text-center lg:mt-0 lg:flex lg:w-1/2 flex-col items-center">
        <h2 className="text-[40px] font-semibold text-[var(--main-color)]">
          {categorieData?.name}
        </h2>
        <p className="my-3">{categorieData?.createdAt}</p>
        <p>{categorieData?.updatedAt}</p>
      </figcaption>
    </figure>
  );
}
