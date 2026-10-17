import { Library } from "lucide-react";

export default function WishlistCard() {
  return (
    <div className="flex items-center bg-[#F5F3F0] justify-between rounded-xl bg-leaf-50 p-4">
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E4E2DF] text-leaf-950">
          <Library className="h-5 w-5" />
        </span>
        <div>
          <h4 className="font-serif text-[20px] leading-7 text-[#07241A] font-semibold">16 Volumes on Scholar's Wishlist</h4>
          <p className="text-[13px] leading-5 text-ink-soft">
            Includes upcoming annotated editions of Borges and Calvino.
          </p>
        </div>
      </div>
      <button className="rounded-lg bg-white px-4 py-2 text-[13px] font-semibold tracking-wide text-leaf-950 shadow-sm">
        View Shelf
      </button>
    </div>
  );
}
