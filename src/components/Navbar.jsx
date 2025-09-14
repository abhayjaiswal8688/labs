import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "react-feather";

export function Flyout_content({ children, href, Flying_content }) {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
      className="relative h-fit w-fit"
    >
      <div
        className="relative text-2xl hover:text-orange-600 cursor-pointer"
        onClick={() => {
          if (href) navigate(href);
        }}
      >
        {children}
        <span
          style={{
            transform: dropdown ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-[#000f3a] transition-transform duration-300 ease-out"
        />
      </div>
      {dropdown && Flying_content && (
        <div className="absolute left-1/2 top-12 -translate-x-1/2 text-black z-10">
          <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
          <div className="absolute left-1/2 top-0 h-2 w-4 -translate-x-1/2 -translate-1/2 rotate-45 bg-white" />
          <Flying_content />
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-evenly mt-7 mb-5">
        <Flyout_content href="/" Flying_content={Null}>
          Kumar's Lab
        </Flyout_content>
        <Flyout_content href="/people" Flying_content={Null}>
          People
        </Flyout_content>
        <Flyout_content href="/project" Flying_content={Null}>
          Project
        </Flyout_content>
        <Flyout_content href="/publications" Flying_content={Null}>
          Publication
        </Flyout_content>
        <Flyout_content href="/resources" Flying_content={Null}>
          Resources
        </Flyout_content>
        <Flyout_content href="/gallery" Flying_content={Null}>
          Gallery
        </Flyout_content>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="text-black"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-[#000f3a] bg-opacity-40 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <div className="text-xl font-semibold">Menu</div>
          <button onClick={() => setIsMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col px-6 py-4 gap-4">
          <MobileNavLink href="/" closeMenu={() => setIsMobileOpen(false)}>Home</MobileNavLink>
          <MobileNavLink href="/people" closeMenu={() => setIsMobileOpen(false)}>People</MobileNavLink>
          <MobileNavLink href="/project" closeMenu={() => setIsMobileOpen(false)}>Project</MobileNavLink>
          <MobileNavLink href="/publications" closeMenu={() => setIsMobileOpen(false)}>Publication</MobileNavLink>
          <MobileNavLink href="/resources" closeMenu={() => setIsMobileOpen(false)}>Resources</MobileNavLink>
          <MobileNavLink href="/gallery" closeMenu={() => setIsMobileOpen(false)}>Gallery</MobileNavLink>
        </div>
      </div>
    </div>
  );
}

function MobileNavLink({ href, children, closeMenu }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(href);
        closeMenu();
      }}
      className="text-lg text-black hover:text-orange-600 cursor-pointer"
    >
      {children}
    </div>
  );
}

function Null() {
  return null;
}

function People_dropdown_menu() {
  return (
    <div className="h-23 w-40 bg-zinc-200 shadow-xl">
      <div className="grid grid-cols-1">
        <div className="col-span-12 justify-self-center mt-3 text-lg hover:text-orange-600 cursor-pointer">
          Lab Members
        </div>
        <div className="col-span-12 h-1 bg-white" />
        <div className="col-span-12 justify-self-center mt-3 text-lg hover:text-orange-600 cursor-pointer">
          Alumni
        </div>
      </div>
    </div>
  );
}
