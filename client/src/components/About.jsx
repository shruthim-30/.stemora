import Photo from "./Photo.jsx";

export default function About({ about }) {
  return (
    <section id="about">
      <div className="wrap grid items-center gap-14 md:grid-cols-2">
        <div>
          <div className="kicker">About us</div>
          <h2>Where curiosity meets the workbench.</h2>
          <p className="sub">{about.text}</p>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <div className="card"><h3 className="mb-2 text-2xl">Our Mission</h3><p className="text-mut">{about.mission}</p></div>
            <div className="card"><h3 className="mb-2 text-2xl">Our Vision</h3><p className="text-mut">{about.vision}</p></div>
          </div>
        </div>
        <Photo label={about.photo} />
      </div>
    </section>
  );
}
