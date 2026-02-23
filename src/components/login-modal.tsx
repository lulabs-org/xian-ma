"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface LoginModalProps {
  children: React.ReactNode;
}

export function LoginModal({ children }: LoginModalProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"email" | "verification">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [codeError, setCodeError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError("请输入邮箱地址");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("请输入有效的邮箱地址");
      return;
    }
    setEmailError("");
    setIsLoading(true);
    // 模拟发送验证码
    setTimeout(() => {
      setStep("verification");
      setIsLoading(false);
    }, 1000);
  };

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) {
      setCodeError("请输入验证码");
      return;
    }
    if (code.length !== 6) {
      setCodeError("验证码应为6位数字");
      return;
    }
    setCodeError("");
    setIsLoading(true);
    // 模拟验证过程
    setTimeout(() => {
      setIsLoading(false);
      setOpen(false);
      setStep("email");
      setEmail("");
      setCode("");
      // 这里可以添加登录成功的处理逻辑
      console.log("登录成功！", { email, code });
    }, 1000);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setStep("email");
      setEmail("");
      setCode("");
      setEmailError("");
      setCodeError("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>登录</DialogTitle>
          <DialogDescription>
            {step === "email"
              ? "输入您的邮箱地址以获取验证码"
              : "请输入收到的验证码"}
          </DialogDescription>
        </DialogHeader>

        {step === "email" ? (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                邮箱地址
              </label>
              <Input
                id="email"
                placeholder="请输入您的邮箱"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />
              {emailError && (
                <p className="text-sm text-red-500">{emailError}</p>
              )}
            </div>
            <DialogFooter>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? "发送中..." : "获取验证码"}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <form onSubmit={handleVerificationSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="code" className="text-sm font-medium">
                验证码
              </label>
              <Input
                id="code"
                placeholder="请输入6位验证码"
                maxLength={6}
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setCodeError("");
                }}
              />
              {codeError && <p className="text-sm text-red-500">{codeError}</p>}
            </div>
            <div className="text-sm text-gray-500">验证码已发送至: {email}</div>
            <DialogFooter className="gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep("email")}
                disabled={isLoading}
              >
                返回
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "验证中..." : "登录"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
