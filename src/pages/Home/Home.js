import Hero from '../../components/hero/Hero';
import Sidebar from '../../components/sidebar/Sidebar';
import Main from '../../components/main/Main';
import ExtraContent from '../../components/extra/ExtraContent';
import RelatedImages from '../../components/related-images/RelatedImages';
import RelatedPost from '../../components/related-post/RelatedPost';

export default function Home() {
  return (
    <>
      <div className="pt-16 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 flex-none">
          <Hero />
        </div>

        <div className="flex-1">
          <Main />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:flex lg:flex-none lg:w-1/3 ">
          <Sidebar />
        </div>
        <div className="flex-1">
          <ExtraContent />
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <RelatedImages />
        </div>
        <div>
          <RelatedPost />
        </div>
      </div>
    </>
  );
}

