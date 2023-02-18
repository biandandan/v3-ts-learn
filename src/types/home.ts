export interface OpenedView {
  path: string
  title: string
}

export class InitData {
  defaultActive = ''
  openedViews: OpenedView[] = []
}