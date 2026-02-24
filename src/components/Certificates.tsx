import React, { useMemo, useState } from "react";

type Cert = {
  id: number;
  title: string;
  field: "IT" | "Kinh tế" | "Truyền thông";
  issuer: string;
  image: string;
  hot?: boolean;
};

const generateCerts = (prefix: string, field: any): Cert[] =>
  Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    title: `${prefix} ${i + 1}`,
    field,
    issuer: field === "IT" ? "Google / Coursera" :
            field === "Kinh tế" ? "Harvard Business" :
            "Hubspot / Meta",
    hot: i % 3 === 0,
    image: `https://source.unsplash.com/600x400/?certificate,${field},${i}`
  }));

export default function Certificates() {
  const [tab, setTab] = useState("achieved");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [modal, setModal] = useState<Cert | null>(null);

  const achieved = generateCerts("Chứng chỉ đã đạt", "IT");
  const suggested = generateCerts("Chứng chỉ đề xuất", "Truyền thông");
  const competitions = generateCerts("Cuộc thi tham gia", "Kinh tế");

  const currentData =
    tab === "achieved"
      ? achieved
      : tab === "suggested"
      ? suggested
      : competitions;

  const filtered = useMemo(() => {
    return currentData.filter(
      (c) =>
        (filter === "All" || c.field === filter) &&
        c.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [currentData, filter, search]);

  const tabStyle =
    tab === "achieved"
      ? "bg-[#FDF6EC]"
      : tab === "suggested"
      ? "bg-[#EAF4F0]"
      : "bg-[#FFF0EE]";

  return (
    <div className="min-h-screen bg-[#F6E7D8]">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <h1 className="text-4xl font-bold text-[#8DB6A0] mb-8">
          🎓 Bộ sưu tập Chứng chỉ
        </h1>

        {/* BOOKMARK TABS */}
        <div className="flex w-full">
          {[
            { key: "achieved", label: "Đã đạt", color: "bg-[#FDF6EC]" },
            { key: "suggested", label: "Đề xuất", color: "bg-[#EAF4F0]" },
            { key: "competition", label: "Cuộc thi", color: "bg-[#FFF0EE]" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex-1 py-5 text-lg font-semibold transition-all duration-500
              ${
                tab === t.key
                  ? `${t.color} scale-105 shadow-xl`
                  : "bg-white/60 hover:bg-white"
              }
              rounded-t-[32px]`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div
        className={`transition-all duration-500 ${tabStyle}
        rounded-t-[32px] mt-[-10px] pt-10 pb-20`}
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* SEARCH + FILTER */}
          <div className="flex flex-wrap gap-4 mb-10">
            <input
              placeholder="Tìm kiếm chứng chỉ..."
              className="px-5 py-3 rounded-full bg-white w-72 outline-none shadow"
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              onChange={(e) => setFilter(e.target.value)}
              className="px-5 py-3 rounded-full bg-white shadow outline-none"
            >
              <option value="All">Tất cả lĩnh vực</option>
              <option value="IT">IT</option>
              <option value="Kinh tế">Kinh tế</option>
              <option value="Truyền thông">Truyền thông</option>
            </select>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {filtered.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => setModal(cert)}
              >
                {cert.hot && (
                  <div className="absolute m-4 bg-[#FF6F61] text-white text-xs px-3 py-1 rounded-full">
                    🔥 Hot thị trường 2026
                  </div>
                )}

                <img
                  src={cert.image}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {cert.issuer}
                  </p>

                  <div className="flex gap-3 flex-wrap">
                    <button className="px-4 py-2 rounded-full bg-[#8DB6A0] text-white text-sm">
                      Xem chi tiết
                    </button>

                    <button className="px-4 py-2 rounded-full bg-gray-100 text-sm">
                      Tải PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* COMPETITION PROGRESS */}
          {tab === "competition" && (
            <div className="mt-16 space-y-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-[24px] shadow-md"
                >
                  <h3 className="font-semibold mb-3">
                    Startup Challenge {i + 1}
                  </h3>
                  <div className="w-full bg-gray-200 h-3 rounded-full">
                    <div
                      className="bg-[#FF6F61] h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(i + 1) * 15}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* MODAL */}
      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-[32px] w-[500px] animate-fadeIn">
            <img
              src={modal.image}
              className="w-full h-52 object-cover rounded-2xl mb-6"
            />
            <h2 className="text-2xl font-bold mb-3">{modal.title}</h2>
            <p className="text-gray-600 mb-6">
              Chứng chỉ này giúp tăng lợi thế cạnh tranh mạnh mẽ trên thị trường lao động 2026. 
              Được công nhận bởi {modal.issuer}.
            </p>
            <button
              onClick={() => setModal(null)}
              className="px-6 py-3 bg-[#FF6F61] text-white rounded-full"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}