import "./App.css";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills";
import About from "./components/About";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { curvesPathName } from "@tsparticles/path-curves";
import { loadAll } from "@tsparticles/all";
import { useEffect, useMemo, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const explosion = useMemo(
        () => ({
            fpsLimit: 120,
            particles: {
                color: {
                    value: "#FF0000",
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "destroy",
                    },
                    path: {
                        clamp: false,
                        enable: true,
                        delay: {
                            value: 0,
                        },
                        generator: curvesPathName,
                    },
                    random: false,
                    speed: 1.5,
                    straight: false,
                    trail: {
                        fill: {
                            color: "#000",
                        },
                        length: 25,
                        enable: true,
                    },
                },
                number: {
                    value: 0,
                    limit: { value: 200 },
                },
                opacity: {
                    value: 0.75,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                    animation: {
                        count: 1,
                        startValue: "min",
                        enable: true,
                        speed: 5,
                        sync: true,
                    },
                },
            },
            background: {
                color: "#000",
            },
            detectRetina: true,
            emitters: {
                direction: "none",
                rate: {
                    quantity: 20,
                    delay: 2,
                },
                size: {
                    width: 0,
                    height: 0,
                    mode: "precise",
                },
                spawnColor: {
                    value: "#00ff00",
                    animation: {
                        h: {
                            enable: false,
                            offset: {
                                min: -0.25,
                                max: 0.25,
                            },
                            speed: 15,
                            sync: false,
                        },
                        l: {
                            enable: true,
                            offset: {
                                min: 0,
                                max: 100,
                            },
                            speed: 2,
                            sync: false,
                        },
                    },
                },
                position: {
                    x: 50,
                    y: 50,
                },
            },
        }),
        []
    );

    const hexagons = useMemo(
        () => ({
            background: {
                color: {
                    value: "#000",
                },
            },
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
                detectsOn: "window",
                events: {
                    resize: {
                        delay: 0.5,
                        enable: true,
                    },
                },
            },
            particles: {
                color: {
                    value: "#00FF00",
                    animation: {
                        h: {
                            count: 0,
                            enable: false,
                            speed: 10,
                            decay: 0,
                            delay: 0,
                            sync: true,
                            offset: 0,
                        },
                        s: {
                            count: 0,
                            enable: true,
                            speed: 1,
                            decay: 0,
                            delay: 0,
                            sync: true,
                            offset: 0,
                        },
                    },
                },
                move: {
                    angle: {
                        offset: 0,
                        value: 90,
                    },
                    center: {
                        x: 50,
                        y: 50,
                        mode: "percent",
                        radius: 0,
                    },
                    enable: true,
                    path: {
                        enable: true,
                        options: {
                            sides: 6,
                            turnSteps: 100,
                            angle: 60,
                        },
                        generator: "polygonPathGenerator",
                    },
                    outModes: {
                        default: "destroy",
                    },
                    random: false,
                    size: false,
                    speed: 2,
                    straight: false,
                    trail: {
                        enable: true,
                        length: 20,
                        fill: {
                            color: {
                                value: "#000",
                            },
                        },
                    },
                },
                number: {
                    value: 0,
                },
                opacity: {
                    value: 1,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: 4,
                },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            emitters: {
                fill: true,
                rate: {
                    quantity: 1,
                    delay: 0.5,
                },
                direction: "none",
                position: {
                    x: 50,
                    y: 50,
                },
            },
        }),
        []
    );

    if (init) {
        return (
            <div className="min-h-screen min-w-screen font-body p-20">
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={hexagons}
                />
                <div className="relative z-10">
                    <section id="about">
                        <About />
                    </section>

                    <section id="skills">
                        <MySkills />
                    </section>

                    <section id="projects">
                        <Projects />
                    </section>
                </div>
                <Analytics />
            </div>
        );
    }
    return <div></div>;
};

export default App;
