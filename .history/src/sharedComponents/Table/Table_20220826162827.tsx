/* eslint-disable @typescript-eslint/no-explicit-any */
import { mdiInformationOutline } from '@mdi/js'
import { mdiDelete, mdiEye, mdiPencil } from '@mdi/js'
import Icon from '@mdi/react'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { User } from '../../services/Authentication.service'

import organizeData from '../../utils/organizeDataForTable'
import paginate from '../../utils/paginate'
import Button from '../Button'

import './Table.scss'

export interface TableHeader {
  key: string
  value: string
  right?: boolean
}

declare interface TableProps {
  headers: TableHeader[]
  data: any[]
  enableActions?: boolean
  itemsPerPage?: number
  profile?: User
  onDelete?: (item: any) => void
  onEdit?: (item: any) => void
  onViewDetail?: (item: any) => void
}

const Table = ({
  headers,
  data,
  enableActions,
  itemsPerPage,
  profile,
  onDelete,
  onEdit,
  onViewDetail
}: TableProps) => {
  const _itemsPerPage = itemsPerPage || 5
  //const page = parseInt(window.location.search) || 1
  const [clickedPage, setClickedPage] = useState<number>(1)
  const [selectedPage, seSelectedPage] = useState<string>('')
  const [organizedData, indexedHeaders] = organizeData(data, headers)
  const paginatedData = paginate(organizedData, _itemsPerPage, clickedPage)
  const totalPages = Math.ceil(organizedData.length / _itemsPerPage)
  const navigate = useNavigate()
  const isLoggedIn = !!profile?._id

  const handleClickPagination = (pageClicked: number) => {
    setClickedPage(pageClicked)
    seSelectedPage(`selected-${pageClicked}`)
  }

  return (
    <>
      <table className="Table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th className={header.right ? 'right' : ''} key={header.key}>
                {header.value}
              </th>
            ))}
            {enableActions && <th className="right">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, i) => {
            return (
              <tr key={i}>
                {Object.keys(row).map((item, i) =>
                  item !== '$original' ? (
                    <>
                      <td
                        key={row.$original._id + i}
                        className={indexedHeaders[item].right ? 'right' : ''}
                      >
                        {row[item]}
                      </td>
                    </>
                  ) : null
                )}
                {enableActions && (
                  <td className="actions right">
                    {onViewDetail && (
                      <Button
                        onClick={() =>
                          onViewDetail && onViewDetail(row.$original)
                        }
                        icon={mdiEye}
                        size="small-xxx"
                        variant="outlined"
                      />
                    )}
                    {onEdit && (
                      <Button
                        onClick={() => onEdit && onEdit(row.$original)}
                        icon={mdiPencil}
                        size="small-xxx"
                        variant="outlined"
                      />
                    )}
                    {onDelete && (
                      <Button
                        onClick={() => onDelete && onDelete(row.$original)}
                        variant="outlined"
                        icon={mdiDelete}
                        size="small-xxx"
                      />
                    )}
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="Table__attribute">
        <Button
          label="new product"
          size={'small-xxx'}
          
          color={'secondary'}
          onClick={() => navigate('/')}
        />

        <div className="Table__pagination">
          {Array(totalPages)
            .fill('')
            .map((_, i) => {
              return (
                <NavLink
                  key={i}
                  className={
                    selectedPage.includes(`${i + 1}`) ? selectedPage : ''
                  }
                  to={{
                    pathname: location.pathname,
                    search: `?page=${i + 1}`
                  }}
                  onClick={() => handleClickPagination(i + 1)}
                >
                  {i + 1}
                </NavLink>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Table
