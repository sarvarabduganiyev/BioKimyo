import medical from "../../img/medical.jpg";
function AboutTwo() {
  return (
    <div className="w-10/12 mx-auto my-20">
      <div className="orange__line"></div>
      <h1 className="content__two__sarlavha mb-3">Company Team</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
        <div className="about__two__card">
          <div className="relative about__img__card__wrapper">
            <img
              className="absolute rounded-2xl  w-full h-full object-cover"
              src={medical}
              alt="medical"
            />
          </div>
          <div>
            <h1 className="mt-1 __qator1">Abdug'aniyev Sarvar</h1>
            <div className="h-12">
              <h2 className="__qator2">
                Communications and corporate relations head
              </h2>
            </div>
          </div>
        </div>
        <div className="about__two__card">
          <div className="relative about__img__card__wrapper">
            <img
              className="absolute rounded-2xl  w-full h-full object-cover"
              src={medical}
              alt="medical"
            />
          </div>
          <div>
            <h1 className="mt-1 __qator1">Abdug'aniyev Sarvar</h1>
            <div className="h-12">
              <h2 className="__qator2">
                Communications and corporate relations head
              </h2>
            </div>
          </div>
        </div>
        <div className="about__two__card">
          <div className="relative about__img__card__wrapper">
            <img
              className="absolute rounded-2xl  w-full h-full object-cover"
              src={medical}
              alt="medical"
            />
          </div>
          <div>
            <h1 className="mt-1 __qator1">Abdug'aniyev Sarvar</h1>
            <div className="h-12">
              <h2 className="__qator2">
                Communications and corporate relations head
              </h2>
            </div>
          </div>
        </div>
        <div className="about__two__card">
          <div className="relative about__img__card__wrapper">
            <img
              className="absolute rounded-2xl  w-full h-full object-cover"
              src={medical}
              alt="medical"
            />
          </div>
          <div>
            <h1 className="mt-1 __qator1">Abdug'aniyev Sarvar</h1>
            <div className="h-12">
              <h2 className="__qator2">
                Communications and corporate relations head
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTwo;
