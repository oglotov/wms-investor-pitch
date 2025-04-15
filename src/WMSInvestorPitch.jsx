
import { Card, CardContent } from "./components/ui/card";
import { Progress } from "./components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function WMSInvestorPitch() {
  const profitData = [
    { year: "Y1", profit: 20000 },
    { year: "Y2", profit: 40000 },
    { year: "Y3", profit: 70000 },
    { year: "Y4", profit: 120000 },
    { year: "Y5", profit: 212355 },
    { year: "Y6", profit: 378240 },
    { year: "Y7", profit: 397152 },
    { year: "Y8", profit: 417009 },
    { year: "Y9", profit: 437859 },
    { year: "Y10", profit: 459751 }
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">WMS Assistant — Інвестиційна презентація</h1>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Графік прибутку компанії</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={profitData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="profit" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
