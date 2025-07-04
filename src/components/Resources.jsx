export function Resources() {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-[#000f3a] h-40 ">
        <div className="pl-10 pt-14 text-semibold text-white text-2xl md:text-3xl flex md:pl-30">
          <div className="underline decoration-yellow-500 underline-offset-23 decoration-1">
            RES</div>OURCES</div>
            </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
        {/* Resource Item */}
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
    </div>
  );
}

function ResourceCard() {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/src/images/resources/Tube-Tops1.jpg"
        className="w-full max-w-xl object-cover rounded-lg shadow-md"
        alt="Resource"
      />
      <h2 className="text-2xl mt-6 text-center font-semibold text-blue-900">
        FLOW CYTOMETRY CORE FACILITY
      </h2>
      <p className="text-lg mt-4 text-justify text-gray-700">
        The Ann Romney Center for Neurologic Diseases Flow Cytometry Facility was established in 2000 and is managed by Rajesh Krishnan, a flow cytometrist with many years of experience in the field. It is a full-time, cell sorting facility with two BD FACSAria IIu, one LSRII analyzer, two FACSCalibur analyzers, and one Miltenyi MACSQuant analyzer. The facility provides flow cytometry analysis training as well as resources for researchers wanting to utilize flow cytometry technology. The facility services the Center, Brigham and Women’s Hospital, as well as outside researchers in the Longwood Medical Area. For more information or to book time on the facility’s instrumentation please contact Rajesh Krishnan.
      </p>
    </div>
  );
}
