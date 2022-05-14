export interface ResponseData {
  title: string,
  hreflangs: {[key: string]: string}[],
  content: {
    heading: string,
    body_sections: string[]
  }
}
