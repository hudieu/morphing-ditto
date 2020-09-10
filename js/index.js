gsap.registerPlugin(MorphSVGPlugin);

let generalMorph = gsap.timeline({ repeat: -1 });

generalMorph
  .to("#dittoMask", { duration: 0.75, fill: "#c8b5d9" }, ">1")
  .to("#dittoOne", { duration: 1.5, morphSVG: "#bulbasaur" })
  .to("#dittoMask", { duration: 1.5, morphSVG: "#bulbasaur" }, ">-1.5")
  .to(
    "#dittoMask",
    {
      duration: 0.75,
      fill: "#8FC8AD",
      onComplete: () => {
        gsap.set("#dittoOne", { fill: "url(#img2)" });
      },
    },
    ">-1"
  )
  .to("#dittoMask", { duration: 0.75, fill: "transparent" })
  .to("#dittoMask", { duration: 0.75, fill: "#8FC8AD" }, ">1")
  .to("#dittoOne", { duration: 1.5, morphSVG: "#charmander" })
  .to("#dittoMask", { duration: 1.5, morphSVG: "#charmander" }, ">-1.5")
  .to(
    "#dittoMask",
    {
      duration: 0.75,
      fill: "#e5a87b",
      onComplete: () => {
        gsap.set("#dittoOne", { fill: "url(#img3)" });
      },
    },
    ">-1"
  )
  .to("#dittoMask", { duration: 0.75, fill: "transparent" })
  .to("#dittoMask", { duration: 0.75, fill: "#e5a87b" }, ">1")
  .to("#dittoOne", { duration: 1.5, morphSVG: "#squirtle" })
  .to("#dittoMask", { duration: 1.5, morphSVG: "#squirtle" }, ">-1.5")
  .to(
    "#dittoMask",
    {
      duration: 0.75,
      fill: "#8ec3d0",
      onComplete: () => {
        gsap.set("#dittoOne", { fill: "url(#img4)" });
      },
    },
    ">-1"
  )
  .to("#dittoMask", { duration: 0.75, fill: "transparent" })
  .to("#dittoMask", { duration: 0.75, fill: "#8ec3d0" }, ">1")
  .to("#dittoOne", { duration: 1.5, morphSVG: "#pikachu" })
  .to("#dittoMask", { duration: 1.5, morphSVG: "#pikachu" }, ">-1.5")
  .to(
    "#dittoMask",
    {
      duration: 0.75,
      fill: "#f3d77b",
      onComplete: () => {
        gsap.set("#dittoOne", { fill: "url(#img5)" });
      },
    },
    ">-1"
  )
  .to("#dittoMask", { duration: 0.75, fill: "transparent" })
  .to("#dittoMask", { duration: 0.75, fill: "#f3d77b" }, ">1")
  .to("#dittoOne", { duration: 1.5, morphSVG: "#ditto" })

  .to("#dittoMask", { duration: 1.5, morphSVG: "#ditto" }, ">-1.5")
  .to(
    "#dittoMask",
    {
      duration: 0.75,
      fill: "#c8b5d9",
      onComplete: () => {
        gsap.set("#dittoOne", { fill: "url(#img1)" });
      },
    },
    ">-1"
  )
  .to("#dittoMask", { duration: 0.75, fill: "transparent" });
