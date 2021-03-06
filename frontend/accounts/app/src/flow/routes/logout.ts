import { PublicApi }   from '@ory/kratos-client'

import { flowIdGuard } from '../utils'

export const logout = async (req, res) => {
  const { publicApi: kratos }: { publicApi: PublicApi } = req.kratos
  const { flow }: { flow: string } = req.query

  flowIdGuard(flow, res, 'logout')

  kratos.initializeSelfServiceBrowserLogoutFlow().catch(() => null)
}
