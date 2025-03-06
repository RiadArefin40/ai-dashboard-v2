import Header from "../components/Header";

export default async function LangLayout({ children, params }) {
  const { lang } = await Promise.resolve(params);
  const isRTL = lang === 'ar';

  return (
    <>
      <Header  lang={lang}  />
      <div 
        dir={isRTL ? 'rtl' : 'ltr'} 
        className={`min-h-screen max-w-[1900px] mx-auto pt-16 ${isRTL ? 'text-right' : 'text-left'}`}
      >
        {children}
      </div>
    </>
  );
}