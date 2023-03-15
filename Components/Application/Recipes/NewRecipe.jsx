import { PlusIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

export default function NewRecipe() {
  const router = useRouter();

  const createRecipe = () => {
    const { category } = router.query;
    // 2  - Add a conditional to determine if the user goes to communityId, or they get directed to the Directory Menu.
    if (category) {
      // 1 - uses Router Hook to redirect the user to wherever we like.
      router.push(`/${category}/create`);
      return;
    } // 3 - Open directory menu.

    // toggleMenuOpen();
  };

  return (
    <div className="max-w-[1800px] min-w-[150px] flex flex-col items-center">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No projects</h3>
      <p className="mt-1 text-sm text-gray-500 text-center">
        Get started by creating a new project.
      </p>
      <div className="mt-6">
        <button
          onClick={createRecipe}
          type="button"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          New Project
        </button>
      </div>
    </div>
  );
}
