import React, { useState, useRef, useEffect } from "react";
import { Code_Snippets, Language_Versions } from "../constants";

function LanguageSelector({ lang, setLang, setValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (selectedLanguage) => {
    setLang(selectedLanguage);
    setValue(Code_Snippets[selectedLanguage]);
    setIsOpen(false);
  };

  const currentVersion = Language_Versions[lang];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="appearance-none text-blue-600 border border-blue-600 hover:text-gray-600 hover:border-gray-600 py-2 px-10 rounded-lg "
        id="language-menu-button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        {lang} Version: {currentVersion}
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute bg-gray-100/20 left-0 mt-2 rounded-md shadow-lg text-blue-600 border border-blue-600 hover:text-blue-600 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu-button"
        >
          <div className="py-1 max-h-60 overflow-y-auto" role="none">
            {Object.keys(Language_Versions).map((languageName) => (
              <button
                key={languageName}
                onClick={() => handleOptionClick(languageName)}
                className={`block w-full text-left px-4 py-2 text-sm
                            ${lang === languageName ? 'bg-blue-600 text-white' : 'text-gray-200 hover:bg-gray-700 hover:text-white'}`}
                role="menuitem"
              >
                {languageName} Version: {Language_Versions[languageName]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;