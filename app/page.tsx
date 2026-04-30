// src/app/page.tsx

export default function Home() {
  return (
    <div className="space-y-10">

      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-600 text-white rounded-xl">
        <h1 className="text-4xl font-bold mb-4">
          Smart ERP & LMS for Modern Education
        </h1>
        <p className="text-lg">
          Manage academics, students, and courses in one place.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="font-semibold text-lg">Student Management</h2>
          <p>Track student data, attendance, and performance.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="font-semibold text-lg">LMS Integration</h2>
          <p>Online courses, assignments, and exams.</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="font-semibold text-lg">Analytics</h2>
          <p>Data-driven insights for better decisions.</p>
        </div>
      </section>

    </div>
  );
}