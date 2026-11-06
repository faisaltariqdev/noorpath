"use client";

/** Prints only the #np-print-kit block (see the np-printing rules in globals.css). */
export default function PrintKitButton() {
  function printKit() {
    document.body.classList.add("np-printing");
    const cleanup = () => {
      document.body.classList.remove("np-printing");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    window.print();
  }

  return (
    <button type="button" onClick={printKit} className="btn-primary-np no-print" style={{ border: "none", cursor: "pointer" }}>
      🖨️ Print the free kit
    </button>
  );
}
