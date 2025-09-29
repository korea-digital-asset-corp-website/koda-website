export const brMap = {
  // PC 전용(>=1024): 모바일에선 숨김
  brPc: () => <br className="hidden lg:block" />,

  // 모바일 전용(<1024): PC에선 숨김
  brMo: () => <br className="block lg:hidden" />,

  // 공통(모든 해상도)
  brAll: () => <br />,
} as const;
