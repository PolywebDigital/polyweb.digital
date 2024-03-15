const BottomBar: React.FC = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 py-16 md:pt-16 md:pb-32 px-[25%] gap-5 justify-center bg-blue-50 ">
      {/* TODO RAJOUTER L'ONGLET POSTULER */}
      <div className="flex flex-col h-fit gap-4 text-center">
        <h4 className="text-xl font-bold"> PolyWeb </h4>
        <p>
          We specialize in providing services to desing websites, applications,
          build and maintain business for customers.
        </p>
      </div>
      <div className="flex flex-col h-fit gap-4 text-center">
        <h4 className="text-xl font-bold"> A propos </h4>
        <ul>
          <li> Accueil </li>
          {/* <li> Notre méthodologie </li> */}
          <li> Notre équipe </li>
          {/* <li> Tarification </li> */}
        </ul>
      </div>
      <div className="flex flex-col h-fit gap-4 text-center">
        <h4 className="text-xl font-bold"> Nous contacter </h4>
        <ul>
          <li> polyweb.digital@gmail.com </li>
          <li> (+33) 06 95 24 34 65 </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomBar;
