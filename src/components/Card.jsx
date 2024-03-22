import React from "react";

function Card({clothOne,clothOnePhoto}) {
  return (
    <div className="flex font-sans w-1/2 bg-slate-300 m-auto mb-10">
      <div className="flex-none w-48 relative">
        <img
          src={clothOnePhoto}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900">
            {clothOne}
          </h1>
          <div className="text-lg font-semibold text-slate-900">$110.00</div>
          <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
            In stock
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-900">
          <div className="space-x-2 flex text-sm">
            <label>
              <input
                className="sr-only peer"
                name="size"
                type="radio"
                value="xs"
                checked
              />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                XS
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="s" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                S
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="m" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                M
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="l" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                L
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="xl" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                XL
              </div>
            </label>
          </div>
        </div>
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <button
              className="h-10 px-6 font-semibold rounded-md bg-black text-white"
              type="submit"
            >
              Buy now
            </button>
            <button
              className="h-10 px-6 font-semibold rounded-md border border-slate-900 text-slate-900"
              type="button"
            >
              Add to bag
            </button>
          </div>
          <button
            className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-900"
            type="button"
            aria-label="Like"
          >
          </button>
        </div>
        <p className="text-sm text-slate-700">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  );
}

export default Card;
