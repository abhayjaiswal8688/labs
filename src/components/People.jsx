import React, { useState } from "react";
import piImg from '../images/People/image.png';
import mem1 from '../images/People/Rocky-Barilla-scaled.jpg';
import mem2 from "../images/People/20221003-Lab-Portraits-0002-scaled-e1700783905429.jpg";
import mem3 from "../images/People/Hee-Sun-Choi-scaled.jpg";
import mem4 from "../images/People/Joshua-Choi-scaled.jpg";
import mem5 from "../images/People/Xiaokai-Ding-scaled.jpg";
import mem6 from "../images/People/Picture1-e1687470450359.jpg";
import mem7 from "../images/People/Ed-Greenfield-scaled.jpg";
import mem8 from "../images/People/Mio.jpg";

export function People() {
    
    const [showModal, setShowModal] = useState(false);
    const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

    const members = [
        {
        name: "Rocky Barilla",
        image: mem1,
        description: "Graduate student studying autoimmune inflammation and neuro-immune interaction."
        },
        {
        name: "Michelle Bookstaver, PHD",
        image: mem2,
        description: "Postdoctoral researcher focusing on T cell biology and signaling pathways in immune regulation."
        },
        {
        name: "Hee Sun Choi, PHD",
        image: mem3,
        description: "Investigates genetic mechanisms underlying autoimmunity and immune tolerance."
        },
        {
        name: "Joshua Choi, PHD",
        image: mem4,
        description: "Research fellow examining the impact of T cell exhaustion in chronic diseases."
        },
        {
        name: "Xiaokai Ding, PHD",
        image: mem5,
        description: "Studies the role of cytokine networks and their dysregulation in inflammation."
        },
        {
        name: "Karen Dixon, PHD",
        image: mem6,
        description: "Postdoc with interest in regulatory T cells and autoimmune pathogenesis."
        },
        {
        name: "Ed Greenfield, PHD",
        image: mem7,
        description: "Senior researcher exploring immunopathology using animal models."
        },
        {
        name: "Mio Hamatani, MD, PHD",
        image: mem8,
        description: "Clinician-scientist working at the intersection of neurology and immunology."
        }
    ];

    const alumni = [
        {
            name: "Edward Greenfield",
            description: "PhD – Director, Antibody Core Facility, Dana-Farber Cancer Institute",
            startYear: 1989,
            endYear: 1992
        },
        {
            name: "Edward Greenfield",
            description: "PhD – Director, Antibody Core Facility, Dana-Farber Cancer Institute",
            startYear: 1989,
            endYear: 1992
        },
        {
            name: "Edward Greenfield",
            description: "PhD – Director, Antibody Core Facility, Dana-Farber Cancer Institute",
            startYear: 1989,
            endYear: 1992
        },
        {
            name: "Edward Greenfield",
            description: "PhD – Director, Antibody Core Facility, Dana-Farber Cancer Institute",
            startYear: 1989,
            endYear: 1992
        },
        {
            name: "Edward Greenfield",
            description: "PhD – Director, Antibody Core Facility, Dana-Farber Cancer Institute",
            startYear: 1989,
            endYear: 1992
        },
        {
            name: "Edward Greenfield",
            description: "PhD – Director, Antibody Core Facility, Dana-Farber Cancer Institute",
            startYear: 1989,
            endYear: 1992
        }
    ];

    const openModal = (index) => {
        setCurrentMemberIndex(index);
        setShowModal(true);
        document.body.classList.add("overflow-hidden");
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.classList.remove("overflow-hidden");
    };

    const previousMember = () => {
        setCurrentMemberIndex((currentMemberIndex - 1 + members.length) % members.length);
    };

    const nextMember = () => {
        setCurrentMemberIndex((currentMemberIndex + 1) % members.length);
    };

    const current = members[currentMemberIndex];

    function toggleAlumni() {
        const list = document.getElementById("alumni-list");
        const btn = document.getElementById("alumni-toggle-btn");
        list.classList.toggle("hidden");
        btn.textContent = list.classList.contains("hidden") ? "SHOW FULL LIST" : "HIDE FULL LIST";
    }

    function togglePI() {
        const desc = document.getElementById("pi-description");
        const icon = document.getElementById("pi-toggle-icon");
        desc.classList.toggle("hidden");
        icon.textContent = desc.classList.contains("hidden") ? "+" : "−";
    }

    return (
        <div className="bg-white text-[#2e2e2e]">
            
            <div className="bg-[#000f3a] h-40 ">
                <div className="pl-30 pt-14 text-semibold text-white text-4xl flex">
                    <div className="underline decoration-yellow-500 underline-offset-23 decoration-1">
                        PEO
                    </div>
                    PLE
                </div>
            </div>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl text-[#000f3a] font-semibold mb-6 border-b-2 border-[#cccccc] pb-2">PRINCIPAL INVESTIGATOR</h2>
                <div className="flex flex-col md:flex-row items-start gap-8 bg-[#eeeeee] shadow rounded-lg p-6">
                    <img src={piImg} alt="Vijay K. Kuchroo" className="w-48 h-auto rounded-lg shadow-md" />
                    <div className="w-full">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl text-[#000f3a] font-bold">VIJAY K. KUCHROO, DVM, PHD</h3>
                        <button onClick={togglePI} className="text-xl font-bold bg-[#003865] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#000f3a] transition">
                        <span id="pi-toggle-icon">+</span>
                        </button>
                    </div>
                    <p id="pi-description" className="mt-4 text-gray-800 leading-relaxed hidden">
                        Dr. Vijay Kuchroo is the Samuel L. Wasserstrom Professor of Neurology at Harvard Medical School, Senior Scientist at Brigham and Women’s Hospital, and Co-Director of the Center for Infection and Immunity, at the Brigham Research Institutes, Boston. He is also an associate member of the Broad Institute, and a participant in a Klarman Cell Observatory project that focuses on T cell differentiation. He is the founding Director of the Evergrande Center for Immunologic Diseases at Harvard Medical School and Brigham and Women’s Hospital. His major research interests include autoimmune diseases—particularly the role of co-stimulation—the genetic basis of experimental autoimmune encephalomyelitis and multiple sclerosis, as well as cell surface molecules and regulatory factors that regulate the induction of T cell tolerance and dysfunction.
                    </p>
                    <div className="mt-4 text-gray-900 font-semibold">
                        Samuel L. Wasserstrom Professor of Neurology | Harvard Medical School<br/>
                        Director, the Gene Lay Institute of Immunology and Inflammation<br/>
                        Senior Scientist | Brigham and Women’s Hospital<br/>
                        Institute Member | Broad Institute of Genetics and Genomics
                    </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl text-[#000f3a] font-semibold mb-6 border-b-2 border-[#cccccc] pb-2">LAB MEMBERS</h2>
                <div id="member-grid" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {
                        members.map( (member, memIndex) =>
                                    <div key={memIndex} className="relative text-center bg-[#eeeeee] p-4 rounded-lg shadow-md transform transition hover:shadow-lg cursor-pointer hover-plus" onClick={() => openModal(memIndex)}>
                                        <img src={ member.image } alt={ member.name } className="h-[93%] object-cover rounded mb-2" />
                                        <h4 className="font-semibold text-[#003865]">{ member.name }</h4>
                                    </div> )
                    }
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl text-[#000f3a] font-semibold mb-4 border-b-2 border-[#cccccc] pb-2">ALUMNI</h2>
                <button onClick={toggleAlumni} id="alumni-toggle-btn" className="mb-4 px-4 py-2 bg-white border border-gray-400 text-[#003865] rounded hover:bg-[#f0f0f0] transition">
                    SHOW FULL LIST
                </button>
                <ul id="alumni-list" className="list-disc pl-6 space-y-3 text-[#003865] hidden">
                    {
                        alumni.map( (alum, alumIndex) =>
                                    <li key={alumIndex}>
                                        <strong>{alum.startYear}–{alum.endYear}:</strong>
                                        <p className="text-black"> 
                                            {alum.name}, {alum.description}
                                        </p>
                                    </li> )
                    }
                </ul>
            </section>

            {/* Modal Overlay */}
            {
                showModal && (
                    <div className="fixed inset-0 bg-black/10 z-50 flex items-center justify-center">
                        <div className="bg-[#2a2a2a]/95 p-4 md:p-6 rounded-xl max-w-3xl w-[90%] h-[95vh] overflow-y-auto shadow-xl text-center text-white relative">
                            <button onClick={closeModal} className="absolute top-4 right-6 text-white hover:text-red-400 text-3xl font-bold">&times;</button>
                            <div className="flex justify-center mb-2">
                                <button onClick={previousMember} className="w-[20%] h-[8vh] my-auto text-3xl text-black bg-gray-100 rounded hover:bg-gray-200">&#8592;</button>
                                <img src={current.image} alt={current.name} className="h-[75vh] mx-auto object-cover rounded " />
                                <button onClick={nextMember} className="w-[20%] h-[8vh] my-auto text-3xl text-black bg-gray-100 rounded hover:bg-gray-200">&#8594;</button>
                            </div>
                            <h3 className="text-3xl font-bold mb-2">{current.name}</h3>
                            <p className="text-gray-200 max-w-3xl text-lg mx-auto">{current.description}</p>
                            
                        </div>
                    </div> )
            }

        </div>
    )
}