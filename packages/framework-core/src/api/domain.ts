/**
 * Tencent is pleased to support the open source community by making CloudBaseFramework - 云原生一体化部署工具 available.
 *
 * Copyright (C) 2020 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * Please refer to license text included with this package for license details.
 */
import { CloudApi } from '.';

export async function describeStaticRes() {
  return CloudApi.tcbService.request('DescribeStaticStore', {});
}

export async function describeCloudBaseGWService() {
  return CloudApi.tcbUinService.request('DescribeCloudBaseGWService', {
    ServiceId: CloudApi.envId,
    EnableRegion: true,
  });
}

export async function fetchDomains() {
  const gwServiceInfo = await describeCloudBaseGWService();
  const staticResInfo = await describeStaticRes();

  return {
    static: staticResInfo?.Data?.[0]?.CdnDomain,
    service: gwServiceInfo?.DefaultDomain,
  };
}
