import { UserDemo } from "../Test/Test";

export const HomePage = () => {
  return (
    <div>
      <h1>Strona główna</h1>
      <UserDemo />
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Test
      </button>
      <div className="max-w-sm mx-auto p-6 bg-white rounded shadow-lg">
        <h2 className="text-xl font-bold mb-2">Tytuł</h2>
        <p className="text-gray-700">To jest przykladowy tekst</p>
        <button className="mt-4 bg-red-500 rounded px-3 py-2">Przycisk</button>
      </div>

      <h1>Grid test</h1>
      <div className="grid grid-cols-3 gap-2 p-6">
        <div className="bg-green-300 p-6 text-center">1</div>
        <div className="bg-blue-300 p-6 text-center">2</div>
        <div className="bg-pink-300 p-6 text-center">3</div>
        <div className="bg-red-300 p-6 text-center">4</div>
        <div className="bg-red-300 p-6 text-center">5</div>
        <div className="bg-red-300 p-6 text-center">6</div>
      </div>

      <h1>Flex test</h1>
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">LOGO</div>
        <nav className="flex gap-4">
          <a className="text-blue hover:underline" href="#">
            Home
          </a>
          <a className="text-blue hover:underline" href="#">
            About
          </a>
          <a className="text-blue hover:underline" href="#">
            Contact
          </a>
        </nav>
      </div>
      <h1>Responsywność</h1>
      <div className="p-6">
        <div className="bg-blue-600 text-white sm:bg-green-500 md:bg-red-500 lg:bg-purple-500 rounded p-">
          zmien kolor w zaleznosci od ekranu
        </div>
      </div>
    </div>
  );
};
