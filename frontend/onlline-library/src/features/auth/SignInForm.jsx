import React from "react";
import { Mail, Lock, Eye, ArrowRight, ShieldCheck, Info } from "lucide-react";
import { Input } from "@/component/ui/Input";
import { Button } from "@/component/ui/Button";
import { Checkbox } from "@/component/ui/Checkbox";

export const SignInForm = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4 space-y-6 text-right" dir="ltr">
      {/* Banner / Top Badge */}
      <div className="flex items-center justify-between text-xs text-[#718096]">
        <span className="px-2.5 py-1 bg-[#F3F4F6] rounded-full text-[#2D3748] font-medium">
          MEMBER ACCESS Desk
        </span>
        <span className="font-serif italic">EN ▾</span>
      </div>

      {/* Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-semibold text-[#C86D51] tracking-wider uppercase">
          Bargin Fellowship
        </span>
        <h1 className="text-2xl font-serif text-[#1A202C]">
          Welcome back to your sanctuary
        </h1>
        <p className="text-xs text-[#4A5568] leading-relaxed">
          Sign in to access your synchronized library, personal marginalia, and
          curated reading shelves.
        </p>
      </div>

      {/* Status Alert Card */}
      <div className="bg-[#F3F4F6] p-3.5 rounded-xl flex items-start space-x-3 space-x-reverse text-xs text-[#2D3748]">
        <ShieldCheck className="text-[#1A362B] shrink-0 mt-0.5" size={18} />
        <div className="space-y-0.5">
          <p className="font-semibold text-[#1A202C]">Archival Cloud Active</p>
          <p className="text-[#4A5568]">
            Last session marginalia saved from your Cambridge folio.
          </p>
        </div>
      </div>

      {/* Input Fields */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <Input
          label="Email or Lumina Patron ID"
          helperText="e.g. #LUM-8842"
          placeholder="clara.vane@lumina.org"
          icon={Mail}
          defaultValue="clara.vane@lumina.org"
        />

        <Input
          label="Secret Passphrase"
          helperText="Forgot key?"
          type="password"
          placeholder="••••••••••••"
          icon={Lock}
          rightIcon={Eye}
          defaultValue="archival-scholar-2024"
        />

        <div className="flex items-center justify-between pt-1">
          <Checkbox
            id="keep-active"
            label="Keep reading session active"
            defaultChecked
          />
          <Info size={14} className="text-gray-400" />
        </div>

        <Button variant="primary" fullWidth className="mt-2">
          <span>Enter Library</span>
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </form>

      {/* Social / SSO Logins */}
      <div className="space-y-3 pt-2">
        <div className="relative flex items-center justify-center">
          <div className="border-t border-gray-200 w-full" />
          <span className="bg-[#FBF9F5] px-3 text-[10px] text-gray-400 uppercase tracking-wider absolute">
            or continue with
          </span>
        </div>

        <div className="space-y-2 pt-2">
          <Button
            variant="outline"
            fullWidth
            className="justify-between text-xs"
          >
            <span className="bg-gray-200 text-gray-700 text-[10px] px-1.5 py-0.5 rounded">
              EduID
            </span>
            <span>University & National Library SSO</span>
          </Button>
          <Button
            variant="outline"
            fullWidth
            className="justify-between text-xs"
          >
            <span className="text-gray-400">›</span>
            <span>Continue with Google</span>
          </Button>
          <Button
            variant="outline"
            fullWidth
            className="justify-between text-xs"
          >
            <span className="text-gray-400">›</span>
            <span>Continue with Apple ID</span>
          </Button>
        </div>
      </div>

      {/* Quote Banner */}
      <div className="bg-[#F3F4F6] p-4 rounded-xl text-center space-y-1">
        <p className="font-serif italic text-xs text-[#2D3748]">
          "A library is not a luxury, but one of the necessities of life."
        </p>
        <p className="text-[10px] text-[#718096]">— Henry Ward Beecher</p>
      </div>

      {/* Footer Links */}
      <div className="text-center space-y-2 pt-2 text-xs">
        <p className="text-[#4A5568]">
          New to the fellowship?{" "}
          <a
            href="#request"
            className="text-[#C86D51] font-medium hover:underline"
          >
            Request Membership
          </a>
        </p>
        <div className="text-[10px] text-[#718096] flex items-center justify-center space-x-2">
          <span>Protected by Lumina Archival Encryption</span>
          <span>•</span>
          <a href="#terms" className="hover:underline">
            Privacy & Terms
          </a>
        </div>
      </div>
    </div>
  );
};
