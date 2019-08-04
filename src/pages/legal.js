import React from "react"

import Layout from "../components/Layout"

const LegalPage = () => {
  return (
    <Layout>
      <p className="mb-4">
        <strong className="font-bold block">
          Aheenam UG (haftungbeschränkt)
        </strong>
        Arminiusstr. 6 <br />
        45721 Haltern am See <br />
        Germany
      </p>
      <p className="mb-4">
        <strong className="font-bold block">E-Mail:</strong> office@aheenam.com
      </p>
      <p className="mb-4">
        <strong className="font-bold block">Tel:</strong> 023649571402
      </p>
      <p className="mb-4">
        <strong className="font-bold block">Managing Director</strong> Rathes
        Sachchithananthan
      </p>
      <p className="mb-4">
        <strong className="font-bold block">Registry-Court</strong> Amtsgericht
        Gelsenkirchen
      </p>
      <p>
        <strong className="font-bold">HRB-No.:</strong> 13484 <br />
        <strong className="font-bold">USt-IdNr.:</strong> DE305928944
      </p>
    </Layout>
  )
}

export default LegalPage
