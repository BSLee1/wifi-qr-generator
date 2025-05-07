import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex justify-end items-center p-4">
        <div className="flex gap-4">
          <Button>HELLO WORLD</Button>
          <Button className="bg-green-600 hover:bg-green-700">초록색 버튼</Button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-4xl font-bold">WiFi QR Generator</h1>
      </div>
    </main>
  );
}

export default Home;
