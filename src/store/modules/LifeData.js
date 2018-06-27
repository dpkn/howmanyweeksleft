/*
  This Vuex store module manages time
*/
import Papa from 'papaparse'

// Module state
const state = {
  men: {},
  women: {},
  other: {},
  demographics:
    {'WLD': 'World / average', 'AFG': 'Afghanistan', 'ALB': 'Albania', 'DZA': 'Algeria', 'AGO': 'Angola', 'ATG': 'Antigua and Barbuda', 'ARB': 'Arab World', 'ARG': 'Argentina', 'ARM': 'Armenia', 'ABW': 'Aruba', 'AUS': 'Australia', 'AUT': 'Austria', 'AZE': 'Azerbaijan', 'BHS': 'Bahamas, The', 'BHR': 'Bahrain', 'BGD': 'Bangladesh', 'BRB': 'Barbados', 'BLR': 'Belarus', 'BEL': 'Belgium', 'BLZ': 'Belize', 'BEN': 'Benin', 'BMU': 'Bermuda', 'BTN': 'Bhutan', 'BOL': 'Bolivia', 'BIH': 'Bosnia and Herzegovina', 'BWA': 'Botswana', 'BRA': 'Brazil', 'BRN': 'Brunei Darussalam', 'BGR': 'Bulgaria', 'BFA': 'Burkina Faso', 'BDI': 'Burundi', 'CPV': 'Cabo Verde', 'KHM': 'Cambodia', 'CMR': 'Cameroon', 'CAN': 'Canada', 'CSS': 'Caribbean small states', 'CAF': 'Central African Republic', 'CEB': 'Central Europe and the Baltics', 'TCD': 'Chad', 'CHI': 'Channel Islands', 'CHL': 'Chile', 'CHN': 'China', 'COL': 'Colombia', 'COM': 'Comoros', 'COD': 'Congo, Dem. Rep.', 'COG': 'Congo, Rep.', 'CRI': 'Costa Rica', 'CIV': "Cote d'Ivoire", 'HRV': 'Croatia', 'CUB': 'Cuba', 'CUW': 'Curacao', 'CYP': 'Cyprus', 'CZE': 'Czech Republic', 'DNK': 'Denmark', 'DJI': 'Djibouti', 'DMA': 'Dominica', 'DOM': 'Dominican Republic', 'EAR': 'Early-demographic dividend', 'EAS': 'East Asia & Pacific', 'EAP': 'East Asia & Pacific (excluding high income)', 'TEA': 'East Asia & Pacific (IDA & IBRD countries)', 'ECU': 'Ecuador', 'EGY': 'Egypt, Arab Rep.', 'SLV': 'El Salvador', 'GNQ': 'Equatorial Guinea', 'ERI': 'Eritrea', 'EST': 'Estonia', 'ETH': 'Ethiopia', 'EMU': 'Euro area', 'ECS': 'Europe & Central Asia', 'ECA': 'Europe & Central Asia (excluding high income)', 'TEC': 'Europe & Central Asia (IDA & IBRD countries)', 'EUU': 'European Union', 'FRO': 'Faroe Islands', 'FJI': 'Fiji', 'FIN': 'Finland', 'FCS': 'Fragile and conflict affected situations', 'FRA': 'France', 'PYF': 'French Polynesia', 'GAB': 'Gabon', 'GMB': 'Gambia, The', 'GEO': 'Georgia', 'DEU': 'Germany', 'GHA': 'Ghana', 'GRC': 'Greece', 'GRL': 'Greenland', 'GRD': 'Grenada', 'GUM': 'Guam', 'GTM': 'Guatemala', 'GIN': 'Guinea', 'GNB': 'Guinea-Bissau', 'GUY': 'Guyana', 'HTI': 'Haiti', 'HPC': 'Heavily indebted poor countries (HIPC)', 'HIC': 'High income', 'HND': 'Honduras', 'HKG': 'Hong Kong SAR, China', 'HUN': 'Hungary', 'IBD': 'IBRD only', 'ISL': 'Iceland', 'IBT': 'IDA & IBRD total', 'IDB': 'IDA blend', 'IDX': 'IDA only', 'IDA': 'IDA total', 'IND': 'India', 'IDN': 'Indonesia', 'IRN': 'Iran, Islamic Rep.', 'IRQ': 'Iraq', 'IRL': 'Ireland', 'IMN': 'Isle of Man', 'ISR': 'Israel', 'ITA': 'Italy', 'JAM': 'Jamaica', 'JPN': 'Japan', 'JOR': 'Jordan', 'KAZ': 'Kazakhstan', 'KEN': 'Kenya', 'KIR': 'Kiribati', 'PRK': 'Korea, Dem. People’s Rep.', 'KOR': 'Korea, Rep.', 'XKX': 'Kosovo', 'KWT': 'Kuwait', 'KGZ': 'Kyrgyz Republic', 'LAO': 'Lao PDR', 'LTE': 'Late-demographic dividend', 'LCN': 'Latin America & Caribbean', 'LAC': 'Latin America & Caribbean (excluding high income)', 'TLA': 'Latin America & the Caribbean (IDA & IBRD countries)', 'LVA': 'Latvia', 'LDC': 'Least developed countries: UN classification', 'LBN': 'Lebanon', 'LSO': 'Lesotho', 'LBR': 'Liberia', 'LBY': 'Libya', 'LIE': 'Liechtenstein', 'LTU': 'Lithuania', 'LMY': 'Low & middle income', 'LIC': 'Low income', 'LMC': 'Lower middle income', 'LUX': 'Luxembourg', 'MAC': 'Macao SAR, China', 'MKD': 'Macedonia, FYR', 'MDG': 'Madagascar', 'MWI': 'Malawi', 'MYS': 'Malaysia', 'MDV': 'Maldives', 'MLI': 'Mali', 'MLT': 'Malta', 'MHL': 'Marshall Islands', 'MRT': 'Mauritania', 'MUS': 'Mauritius', 'MEX': 'Mexico', 'FSM': 'Micronesia, Fed. Sts.', 'MEA': 'Middle East & North Africa', 'MNA': 'Middle East & North Africa (excluding high income)', 'TMN': 'Middle East & North Africa (IDA & IBRD countries)', 'MIC': 'Middle income', 'MDA': 'Moldova', 'MNG': 'Mongolia', 'MNE': 'Montenegro', 'MAR': 'Morocco', 'MOZ': 'Mozambique', 'MMR': 'Myanmar', 'NAM': 'Namibia', 'NPL': 'Nepal', 'NLD': 'Netherlands', 'NCL': 'New Caledonia', 'NZL': 'New Zealand', 'NIC': 'Nicaragua', 'NER': 'Niger', 'NGA': 'Nigeria', 'NAC': 'North America', 'NOR': 'Norway', 'OED': 'OECD members', 'OMN': 'Oman', 'OSS': 'Other small states', 'PSS': 'Pacific island small states', 'PAK': 'Pakistan', 'PLW': 'Palau', 'PAN': 'Panama', 'PNG': 'Papua New Guinea', 'PRY': 'Paraguay', 'PER': 'Peru', 'PHL': 'Philippines', 'POL': 'Poland', 'PRT': 'Portugal', 'PST': 'Post-demographic dividend', 'PRE': 'Pre-demographic dividend', 'PRI': 'Puerto Rico', 'QAT': 'Qatar', 'ROU': 'Romania', 'RUS': 'Russian Federation', 'RWA': 'Rwanda', 'WSM': 'Samoa', 'SMR': 'San Marino', 'STP': 'Sao Tome and Principe', 'SAU': 'Saudi Arabia', 'SEN': 'Senegal', 'SRB': 'Serbia', 'SYC': 'Seychelles', 'SLE': 'Sierra Leone', 'SGP': 'Singapore', 'SXM': 'Sint Maarten', 'SVK': 'Slovak Republic', 'SVN': 'Slovenia', 'SST': 'Small states', 'SLB': 'Solomon Islands', 'SOM': 'Somalia', 'ZAF': 'South Africa', 'SAS': 'South Asia', 'TSA': 'South Asia (IDA & IBRD)', 'SSD': 'South Sudan', 'ESP': 'Spain', 'LKA': 'Sri Lanka', 'KNA': 'St. Kitts and Nevis', 'LCA': 'St. Lucia', 'MAF': 'St. Martin (French part)', 'VCT': 'St. Vincent and the Grenadines', 'SSF': 'Sub-Saharan Africa', 'SSA': 'Sub-Saharan Africa (excluding high income)', 'TSS': 'Sub-Saharan Africa (IDA & IBRD countries)', 'SDN': 'Sudan', 'SUR': 'Suriname', 'SWZ': 'Swaziland', 'SWE': 'Sweden', 'CHE': 'Switzerland', 'SYR': 'Syrian Arab Republic', 'TJK': 'Tajikistan', 'TZA': 'Tanzania', 'THA': 'Thailand', 'TLS': 'Timor-Leste', 'TGO': 'Togo', 'TON': 'Tonga', 'TTO': 'Trinidad and Tobago', 'TUN': 'Tunisia', 'TUR': 'Turkey', 'TKM': 'Turkmenistan', 'UGA': 'Uganda', 'UKR': 'Ukraine', 'ARE': 'United Arab Emirates', 'GBR': 'United Kingdom', 'USA': 'United States', 'UMC': 'Upper middle income', 'URY': 'Uruguay', 'UZB': 'Uzbekistan', 'VUT': 'Vanuatu', 'VEN': 'Venezuela, RB', 'VNM': 'Vietnam', 'VIR': 'Virgin Islands (U.S.)', 'PSE': 'West Bank and Gaza', 'YEM': 'Yemen, Rep.', 'ZMB': 'Zambia', 'ZWE': 'Zimbabwe'}
}

// Mutations
const mutations = {
  // Add timeline to store
  addLifeData: (state, payload) => {
    var gender = payload.gender
    var data = payload.data
    state[gender] = data
  }
}

// Actions
const actions = {
  loadLifeData: function ({commit, state}, gender) {
    Papa.parse('static/lifedata/' + gender + '.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: function (result) {
        var data = result['data']
        commit('addLifeData', {
          gender,
          data
        })
      }
    })
  }
}

// Export store module
export default {
  state,
  mutations,
  actions
}
