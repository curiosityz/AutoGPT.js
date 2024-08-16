import { getGoogleGeminiAPIKey, setGoogleGeminiAPIKey, getOpenRouterAPIKey, setOpenRouterAPIKey } from 'AutoGPT/utils/apiKey';
import { useAIStateDispatcher } from './AIStateProvider';
import { useCallback, useRef } from 'react';

export function HowToUseWithTokenRequest() {
  const { setupDispatcher } = useAIStateDispatcher();
  const googleGeminiTokenRef = useRef<HTMLInputElement>(null);
  const openRouterTokenRef = useRef<HTMLInputElement>(null);

  const onSaveClicked = useCallback(() => {
    if (googleGeminiTokenRef.current?.value) {
      setGoogleGeminiAPIKey(googleGeminiTokenRef.current?.value);
    }

    if (openRouterTokenRef.current?.value) {
      setOpenRouterAPIKey(openRouterTokenRef.current?.value);
    }

    if (getGoogleGeminiAPIKey() && getOpenRouterAPIKey()) {
      // Only go to next stage if there are API keys present
      setupDispatcher("next_stage");
    }
  }, [setupDispatcher]);

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Autonomous AI
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Give your custom AI a name and set it on a mission to achieve any
            goal you can imagine – all running within your browser. Watch it
            generate tasks, execute them, and learn from the outcomes for
            optimal results 🚀
          </p>
        </div>
        <div className="mt-5 sm:flex sm:items-center">
          <PluginGrid />
        </div>
        <h3 className="mt-4 text-base font-semibold leading-6 text-gray-900">
          Tokens
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            AutoGPT uses Google Gemini and OpenRouter APIs directly from the browser. The tokens are required
            to call those APIs and are only stored on your browser. You can go to{" "}
            <a
              href="https://cloud.google.com/gemini"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline underline-offset-1"
            >
              Google Gemini
            </a>{" "}
            and{" "}
            <a
              href="https://openrouter.ai"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline underline-offset-1"
            >
              OpenRouter
            </a>{" "}
            to create new tokens.
          </p>
        </div>

        <form className="mt-5 sm:flex sm:items-center">
          <div className="sm:w-full sm:max-w-2xl">
            <label htmlFor="google-gemini-token" className="sr-only">
              Google Gemini Token
            </label>
            <input
              ref={googleGeminiTokenRef}
              type="text"
              name="google-gemini-token"
              id="google-gemini-token"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder={getGoogleGeminiAPIKey() ?? "sk-google-gemini-1234..."}
            />
          </div>
          <div className="sm:w-full sm:max-w-2xl mt-4 sm:mt-0 sm:ml-3">
            <label htmlFor="openrouter-token" className="sr-only">
              OpenRouter Token
            </label>
            <input
              ref={openRouterTokenRef}
              type="text"
              name="openrouter-token"
              id="openrouter-token"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder={getOpenRouterAPIKey() ?? "sk-openrouter-1234..."}
            />
          </div>
          <button
            type="button"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
            onClick={onSaveClicked}
          >
            Start
          </button>
        </form>
      </div>
    </div>
  );
}

interface PluginGroupInfo {
  emoji: string;
  name: string;
  description: string;
}

const PLUGIN_INFOS: PluginGroupInfo[] = [
  {
    emoji: "🌐",
    name: "Web Explorer",
    description: "Browse the internet effortlessly with this powerful tool.",
  },
  {
    emoji: "🔎",
    name: "Search",
    description: "Explore the web with DuckDuckGo search engine."
  },
  {
    emoji: "💻",
    name: "Code Crafter",
    description: "Generate code tailored to accomplish your goals",
  },
  {
    emoji: "🤖",
    name: "Agent Architect",
    description: "Design and delegate tasks to GPT-based agents.",
  },
  {
    emoji: "📁",
    name: "File Forge",
    description: "Create and edit files.",
  },
];

function PluginGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {PLUGIN_INFOS.map((pluginInfo, index) => (
        <div
          key={index}
          className="relative flex cursor-pointer items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 sm:max-w-xs"
        >
          <div className="flex-shrink-0 text-3xl">{pluginInfo.emoji}</div>
          <div className="min-w-0 flex-1">
            <a href="#" className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">
                {pluginInfo.name}
              </p>
              <div className="text-sm text-gray-500">
                {pluginInfo.description}
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
