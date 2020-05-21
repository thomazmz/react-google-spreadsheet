import toJson from 'csvtojson'
import request from 'request'

// General link
// https://docs.google.com/spreadsheets/d/{key}/gviz/tq?tqx=out:csv&sheet={sheet_name}

async function getSpreadSheetResource(spreadSheetKey, sheetName) {
  const spreadSheetUrl = `https://docs.google.com/spreadsheets/d/${spreadSheetKey}/gviz/tq?tqx=out:csv&sheet=${sheetName}`
  const json = await toJson().fromStream(request.get(spreadSheetUrl))
  return json
}

export async function getServiceProviders() {
  const professionalsSpreadSheetKey = '18qL4uVjrkFwxVzQAoEd9WHRTnXBajt2TqcM-QMlajBA'
  const professionalsSheetName = 'profissionais'
  return await getSpreadSheetResource(professionalsSpreadSheetKey, professionalsSheetName)
}