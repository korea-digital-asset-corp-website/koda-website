export interface PrivacyPolicyVersion {
  version: string; // 'v0', 'v1', 'v2'...
  versionNumber: number; // 0, 1, 2...
  effectiveDate: string; // '2025.07.08' (시행일)
  releaseDate: string; // '2025.07.08' (배포일, 현재는 시행일과 동일)
  isLatest: boolean; // 최신 버전 여부
  isUpcoming?: boolean; // 시행예정 여부 (확장성용)
  changeReasonKey: string; // 변경 내역
  titleKey: string; // '개인정보 처리방침 v5'
}

export const privacyPolicyVersions: PrivacyPolicyVersion[] = [
  {
    version: 'v7',
    versionNumber: 7,
    effectiveDate: '2025.09.30',
    releaseDate: '2025.09.30',
    isLatest: true,
    changeReasonKey: 'privacyPolicy.versions.v7.changeReason',
    titleKey: 'privacyPolicy.versions.v7.title',
  },
  {
    version: 'v6',
    versionNumber: 6,
    effectiveDate: '2025.07.08',
    releaseDate: '2025.07.08',
    isLatest: false,
    changeReasonKey: 'privacyPolicy.versions.v6.changeReason',
    titleKey: 'privacyPolicy.versions.v6.title',
  },
  {
    version: 'v5',
    versionNumber: 5,
    effectiveDate: '2025.06.04',
    releaseDate: '2025.06.04',
    isLatest: false,
    changeReasonKey: 'privacyPolicy.versions.v5.changeReason',
    titleKey: 'privacyPolicy.versions.v5.title',
  },
  {
    version: 'v4',
    versionNumber: 4,
    effectiveDate: '2025.02.25',
    releaseDate: '2025.02.25',
    isLatest: false,
    changeReasonKey: 'privacyPolicy.versions.v4.changeReason',
    titleKey: 'privacyPolicy.versions.v4.title',
  },
  {
    version: 'v3',
    versionNumber: 3,
    effectiveDate: '2024.02.21',
    releaseDate: '2024.02.21',
    isLatest: false,
    changeReasonKey: 'privacyPolicy.versions.v3.changeReason',
    titleKey: 'privacyPolicy.versions.v3.title',
  },
  {
    version: 'v2',
    versionNumber: 2,
    effectiveDate: '2023.06.16',
    releaseDate: '2023.06.16',
    isLatest: false,
    changeReasonKey: 'privacyPolicy.versions.v2.changeReason',
    titleKey: 'privacyPolicy.versions.v2.title',
  },
  {
    version: 'v1',
    versionNumber: 1,
    effectiveDate: '2022.03.25',
    releaseDate: '2022.03.25',
    isLatest: false,
    changeReasonKey: 'privacyPolicy.versions.v1.changeReason',
    titleKey: 'privacyPolicy.versions.v1.title',
  },
  {
    version: 'v0',
    versionNumber: 0,
    effectiveDate: '2021.01.01',
    releaseDate: '2021.01.01',
    isLatest: false,
    changeReasonKey: 'privacyPolicy.versions.v0.changeReason',
    titleKey: 'privacyPolicy.versions.v0.title',
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
