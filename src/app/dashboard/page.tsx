"use client";

import { useState } from "react";

export default function Dashboard() {
  const [showPersonSelector, setShowPersonSelector] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [currentView, setCurrentView] = useState<"selector" | "detail">(
    "selector",
  );
  const [selectedPersonDetail, setSelectedPersonDetail] = useState<
    string | null
  >(null);
  const [isHoveringPerson, setIsHoveringPerson] = useState(false);
  const [showUserSidebar, setShowUserSidebar] = useState(false);

  const people = [
    { name: "张三", age: 28, department: "技术部", phone: "13800138000" },
    { name: "李四", age: 32, department: "市场部", phone: "13900139000" },
    { name: "王五", age: 25, department: "人事部", phone: "13700137000" },
    { name: "赵六", age: 29, department: "财务部", phone: "13600136000" },
    { name: "陈七", age: 35, department: "运营部", phone: "13500135000" },
    { name: "刘八", age: 27, department: "设计部", phone: "13400134000" },
  ];

  const handlePersonSelect = (person: string) => {
    setSelectedPerson(person);
    setShowPersonSelector(false);
    setShowUserSidebar(true);
  };

  const handlePersonRightClick = (personName: string, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedPersonDetail(personName);
    setCurrentView("detail");
  };

  const handleBackToSelector = () => {
    setCurrentView("selector");
  };

  const handlePersonPillClick = () => {
    if (selectedPerson) {
      setCurrentView("selector");
      setShowPersonSelector(true);
    }
  };

  const handlePersonPillRemove = () => {
    setSelectedPerson(null);
  };

  const handleCloseUserSidebar = () => {
    setShowUserSidebar(false);
  };

  const handleSend = () => {
    if (message.trim()) {
      console.log("发送消息:", message, "给:", selectedPerson);
      setMessage("");
    }
  };

  return (
    <main className="relative flex min-h-screen w-full bg-gray-50">
      {/* 主要内容区域 */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
      </div>

      {/* 人员选择浮层 */}
      {showPersonSelector && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          {currentView === "selector" ? (
            <div className="bg-white rounded-xl p-8 shadow-2xl border border-gray-100 transform scale-110">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                选择人员
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {people.map((person) => (
                  <button
                    key={person.name}
                    onClick={() => handlePersonSelect(person.name)}
                    onContextMenu={(e) =>
                      handlePersonRightClick(person.name, e)
                    }
                    className="px-5 py-3 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors text-base font-medium"
                  >
                    {person.name}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowPersonSelector(false)}
                className="mt-6 w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-base"
              >
                取消
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 shadow-2xl border border-gray-100 min-w-[350px] transform scale-110">
              <div className="flex items-center mb-6">
                <button
                  onClick={handleBackToSelector}
                  className="mr-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <h3 className="text-xl font-semibold text-gray-800">
                  人员详情
                </h3>
              </div>
              {people.find((p) => p.name === selectedPersonDetail) && (
                <div className="space-y-4">
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600 font-medium">姓名:</span>
                    <span className="font-semibold">
                      {
                        people.find((p) => p.name === selectedPersonDetail)
                          ?.name
                      }
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600 font-medium">年龄:</span>
                    <span className="font-semibold">
                      {people.find((p) => p.name === selectedPersonDetail)?.age}
                      岁
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600 font-medium">部门:</span>
                    <span className="font-semibold">
                      {
                        people.find((p) => p.name === selectedPersonDetail)
                          ?.department
                      }
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600 font-medium">电话:</span>
                    <span className="font-semibold">
                      {
                        people.find((p) => p.name === selectedPersonDetail)
                          ?.phone
                      }
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 用户详情侧边栏 */}
      {showUserSidebar && selectedPerson && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl border-l border-gray-200 z-40 transform transition-transform duration-300">
          <div className="p-6">
            {/* 侧边栏头部 */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800">用户详情</h3>
              <button
                onClick={handleCloseUserSidebar}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* 用户信息 */}
            {people.find((p) => p.name === selectedPerson) && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-800">
                      {selectedPerson.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {selectedPerson}
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">姓名:</span>
                    <span className="font-semibold">{selectedPerson}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">年龄:</span>
                    <span className="font-semibold">
                      {people.find((p) => p.name === selectedPerson)?.age}岁
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">部门:</span>
                    <span className="font-semibold">
                      {
                        people.find((p) => p.name === selectedPerson)
                          ?.department
                      }
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">电话:</span>
                    <span className="font-semibold">
                      {people.find((p) => p.name === selectedPerson)?.phone}
                    </span>
                  </div>
                </div>

                {/* 删除用户按钮 */}
                <button
                  onClick={() => {
                    setSelectedPerson(null);
                    setShowUserSidebar(false);
                  }}
                  className="w-full mt-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                  删除用户
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 底部消息栏 - 整合成药丸形状（缩小到70%） */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="w-[70%] max-w-md">
          {/* 选中的人员药丸 */}
          {selectedPerson && (
            <div className="mb-2 ml-4">
              <span
                className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium cursor-pointer hover:bg-green-200 transition-colors relative"
                onClick={handlePersonPillClick}
                onMouseEnter={() => setIsHoveringPerson(true)}
                onMouseLeave={() => setIsHoveringPerson(false)}
              >
                {selectedPerson}
                {isHoveringPerson && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePersonPillRemove();
                    }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                  >
                    ×
                  </button>
                )}
              </span>
            </div>
          )}

          {/* 整合的药丸形状消息栏 */}
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-3 shadow-lg border border-gray-200">
            {/* 加号按钮 */}
            <button
              onClick={() => setShowPersonSelector(true)}
              className="w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>

            {/* 消息输入框 */}
            <div className="flex-1">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="输入消息..."
                className="w-full bg-transparent outline-none text-gray-800 px-2"
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
            </div>

            {/* 发送按钮 */}
            <button
              onClick={handleSend}
              className="w-8 h-8 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
