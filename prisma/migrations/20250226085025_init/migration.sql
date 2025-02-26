-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'PLANNER', 'PRODUCTIE', 'MEDEWERKER');

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "project" TEXT,
    "verkoop_order" TEXT,
    "pos" INTEGER,
    "aanmaak_datum" TIMESTAMP(3),
    "type_artikel" TEXT,
    "debiteur_klant" TEXT,
    "materiaal" TEXT,
    "kantenband" TEXT,
    "kleur" TEXT,
    "hoogte" DOUBLE PRECISION,
    "db_waarde" DOUBLE PRECISION,
    "opmerking" TEXT,
    "productie_lever_datum" TIMESTAMP(3),
    "startdatum_assemblage" TIMESTAMP(3),
    "start_datum_machinale" TIMESTAMP(3),
    "bruto_zagen" TIMESTAMP(3),
    "pers" TIMESTAMP(3),
    "netto_zagen" TIMESTAMP(3),
    "verkantlijmen" TIMESTAMP(3),
    "cnc_start_datum" TIMESTAMP(3),
    "pmt_start_datum" TIMESTAMP(3),
    "lakkerij_datum" TIMESTAMP(3),
    "datum_coaten" TIMESTAMP(3),
    "m1_verkantlijmen" TIMESTAMP(3),
    "order_gereed" TIMESTAMP(3),
    "inpak" TIMESTAMP(3),
    "rail" TIMESTAMP(3),
    "boards" INTEGER,
    "frames" INTEGER,
    "ap_tws" INTEGER,
    "wp_frame" INTEGER,
    "wp_dwp_pc_boards" INTEGER,
    "profielen" INTEGER,
    "kokers" INTEGER,
    "lakken" BOOLEAN,
    "mon" INTEGER,
    "pho" INTEGER,
    "pro" INTEGER,
    "ap" INTEGER,
    "sp" INTEGER,
    "cp" INTEGER,
    "wp" INTEGER,
    "dwp" INTEGER,
    "pc" INTEGER,
    "pcp" INTEGER,
    "tot" INTEGER,
    "totaal_boards" INTEGER,
    "controle_order" BOOLEAN,
    "pop_up_zaag" BOOLEAN,
    "pop_up_assemblage" BOOLEAN,
    "pop_up_cnc" BOOLEAN,
    "pop_up_cnc2" BOOLEAN,
    "pop_up_verkantlijmer" BOOLEAN,
    "pop_up_inpak" BOOLEAN,
    "pop_up_rail" BOOLEAN,
    "pop_up_grote_zaag" BOOLEAN,
    "pop_zaag_2" BOOLEAN,
    "pop_heftruck" BOOLEAN,
    "inkoopordernummer" TEXT,
    "gez_planning" TEXT,
    "slotje" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "naam" TEXT NOT NULL,
    "wachtwoord" TEXT NOT NULL,
    "rol" "Role" NOT NULL DEFAULT 'MEDEWERKER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
