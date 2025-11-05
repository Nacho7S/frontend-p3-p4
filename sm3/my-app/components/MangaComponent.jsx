import React from 'react'
import { mangaDexImageUrl } from '../lib/mangadexUrls';
import { useRouter } from 'next/navigation';

export default function MangaComponent({ manga }) {
  const router = useRouter()
  const enTitle = manga.attributes.title.en
  const jpnTitle = manga.attributes.title.ja

  const handleChangePage = (id) => {
    router.push(`/layouting/${id}`)
  }

  const getMangaStatus = (status) => {
    switch (status) {
      case 'ongoing':
        return <span className="absolute p-[5px] mt-1.5 rounded-lg font-sans bg-amber-600 font-bold text-teal-50">Ongoing</span>;
      case 'completed':
        return <span className="absolute p-[5px] mt-1.5 rounded-lg font-sans text-teal-50 font-bold bg-green-500">Completed</span>;
      case 'canceled':
        return <span className="absolute p-[5px] mt-1.5 rounded-lg font-sans text-teal-50 font-bold bg-red-800">Canceled</span>;
      default:
        return null;
    }
  };
  return (
    <div key={manga.id} className="w-[95%]  rounded-3xl border-red-600 border-2 flex flex-col " onClick={() => handleChangePage(manga.id)}>
      {getMangaStatus(manga.attributes.status)}
      <img
        src={
          mangaDexImageUrl +
          manga.id +
          '/' +
          manga.relationships.find((rel) => rel.type === 'cover_art').attributes.fileName
        }
        alt="Manga Cover"
        className="w-[90%] self-center mt-2 rounded-3xl"
      />
      <div className="flex flex-col items-center justify-between text-center">
        <h6 className=" max-h-[3em] overflow-hidden ps-[4%] pe-[4%] text-ellipsis mb-[5px]">{enTitle ? enTitle : jpnTitle}</h6>
        {/* Display manga genres */}
        <div className="flex flex-row flex-wrap justify-center items-end gap-2 rounded-2xl bg-red-400 text-red-100">
          {manga.attributes.tags.slice(0, 3).map((tag) => (
            <span className=" font-bold text-[0.75rem] " key={tag.id}>
              {tag.attributes.name.en}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
