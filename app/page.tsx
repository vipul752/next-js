import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-purple-600">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Welcome to Our Platform
            </h1>
            <p className="text-xl text-indigo-100 mb-12">
              Join thousands of users and start your journey today
            </p>

            <div className="flex justify-center gap-6">
              <Link
                href="/signup"
                className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-50 transition duration-300"
              >
                Sign Up
              </Link>
              <Link
                href="/signin"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition duration-300"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Easy to Use
              </h3>
              <p className="text-indigo-100">
                Simple and intuitive interface designed for the best user
                experience
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Secure</h3>
              <p className="text-indigo-100">
                Your data is protected with industry-leading security measures
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                24/7 Support
              </h3>
              <p className="text-indigo-100">
                Our dedicated team is always here to help you succeed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
