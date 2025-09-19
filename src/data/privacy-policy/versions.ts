export interface PrivacyPolicyVersion {
  version: string; // 'v0', 'v1', 'v2'...
  versionNumber: number; // 0, 1, 2...
  effectiveDate: string; // '2025.07.08' (시행일)
  releaseDate: string; // '2025.07.08' (배포일, 현재는 시행일과 동일)
  isLatest: boolean; // 최신 버전 여부
  isUpcoming?: boolean; // 시행예정 여부 (확장성용)
  changeReason: string; // 변경 내역
  title: string; // '개인정보 처리방침 v5'
}

export const privacyPolicyVersions: PrivacyPolicyVersion[] = [
  {
    version: 'v5',
    versionNumber: 5,
    effectiveDate: '2025.06.04',
    releaseDate: '2025.06.04',
    isLatest: true,
    changeReason: 'ISMS 인증심사 결함 조치',
    title: '개인정보 처리방침 v5',
  },
  {
    version: 'v4',
    versionNumber: 4,
    effectiveDate: '2025.02.25',
    releaseDate: '2025.02.25',
    isLatest: false,
    changeReason: '[개인정보 처리위탁 - CODE]',
    title: '개인정보 처리방침 v4',
  },
  {
    version: 'v3',
    versionNumber: 3,
    effectiveDate: '2024.02.21',
    releaseDate: '2024.02.21',
    isLatest: false,
    changeReason: '[개인정보 보호 책임자 사항 변경]',
    title: '개인정보 처리방침 v3',
  },
  {
    version: 'v2',
    versionNumber: 2,
    effectiveDate: '2023.06.16',
    releaseDate: '2023.06.16',
    isLatest: false,
    changeReason: '[가상자산 수탁 서비스 등 제공 관련 개인정보(대리인 포함)의 항목 추가]',
    title: '개인정보 처리방침 v2',
  },
  {
    version: 'v1',
    versionNumber: 1,
    effectiveDate: '2022.03.25',
    releaseDate: '2022.03.25',
    isLatest: false,
    changeReason: '개인정보처리의 위탁 및 개인정보 보호책임자 변경',
    title: '개인정보 처리방침 v1',
  },
  {
    version: 'v0',
    versionNumber: 0,
    effectiveDate: '2021.01.01',
    releaseDate: '2021.01.01',
    isLatest: false,
    changeReason:
      '[특정 금융거래정보의 보고 및 이용에 관한 법률 시행령]에 의거 트래블룰 적용에 따른 자산이동 수집항목 추가',
    title: '개인정보 처리방침 v0',
  },
];

export const getLatestVersion = () => privacyPolicyVersions.find((v) => v.isLatest);

// 현재 시행 중인 버전을 가져오는 함수 (배포일=시행일 기준)
export const getCurrentEffectiveVersion = () => {
  const today = new Date();
  return privacyPolicyVersions
    .filter((v) => {
      const effectiveDate = new Date(v.effectiveDate.replace(/\./g, '-'));
      return effectiveDate <= today;
    })
    .sort(
      (a, b) =>
        new Date(b.effectiveDate.replace(/\./g, '-')).getTime() -
        new Date(a.effectiveDate.replace(/\./g, '-')).getTime(),
    )[0];
};

// 미래 시행 예정 버전들을 가져오는 함수 (확장성용)
export const getUpcomingVersions = () => {
  const today = new Date();
  return privacyPolicyVersions.filter((v) => v.isUpcoming && new Date(v.effectiveDate.replace(/\./g, '-')) > today);
};

export const getVersionByNumber = (version: string) => privacyPolicyVersions.find((v) => v.version === version);

export const getAllVersions = () => privacyPolicyVersions.sort((a, b) => b.versionNumber - a.versionNumber);
