export default function TaskTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full w-2/3 mx-auto">
      <table className="min-w-full border-collapse rounded-lg overflow-hidden text-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="border-b border-gray-300 px-4 py-2 text-left w-15"></th>
            <th className="border-b border-gray-300 px-4 py-2 text-left">
              Task
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
