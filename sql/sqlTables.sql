SET QUOTED_IDENTIFIER OFF;
GO
USE [Kanban];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_BOARD_COLUMNS]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[COLUMNS] DROP CONSTRAINT [FK_BOARD_COLUMNS];
GO
IF OBJECT_ID(N'[dbo].[FK_Member_Board]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Board] DROP CONSTRAINT [FK_Member_Board];
GO
IF OBJECT_ID(N'[dbo].[FK_Member_Users]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[USERS] DROP CONSTRAINT [FK_Member_Users];
GO
IF OBJECT_ID(N'[dbo].[FK_USER_CARD]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[CARD] DROP CONSTRAINT [FK_USER_CARD];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Board]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Board];
GO
IF OBJECT_ID(N'[dbo].[CARD]', 'U') IS NOT NULL
    DROP TABLE [dbo].[CARD];
GO
IF OBJECT_ID(N'[dbo].[COLUMNS]', 'U') IS NOT NULL
    DROP TABLE [dbo].[COLUMNS];
GO
IF OBJECT_ID(N'[dbo].[MEMBER]', 'U') IS NOT NULL
    DROP TABLE [dbo].[MEMBER];
GO
IF OBJECT_ID(N'[dbo].[USERS]', 'U') IS NOT NULL
    DROP TABLE [dbo].[USERS];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Boards'
CREATE TABLE [dbo].[Boards] (
    [BoardID] int  NOT NULL,
    [MemberID] int  NULL,
    [BoardLanes] int  NULL,
    [BoardName] nvarchar(50)  NULL
);
GO

-- Creating table 'CARDs'
CREATE TABLE [dbo].[CARDs] (
    [CardID] int  NOT NULL,
    [ColumnID] int  NULL,
    [CardName] nvarchar(50)  NULL,
    [CardContent] nvarchar(255)  NULL,
    [UserID] int  NULL,
    [DateCreated] datetime  NULL
);
GO

-- Creating table 'COLUMNS'
CREATE TABLE [dbo].[COLUMNS] (
    [ColumnID] int  NOT NULL,
    [BoardID] int  NULL,
    [ColumnHeader] nvarchar(50)  NULL,
    [ColumnOrder] int  NULL
);
GO

-- Creating table 'MEMBERs'
CREATE TABLE [dbo].[MEMBERs] (
    [MemberID] int  NOT NULL,
    [MemberName] nvarchar(50)  NOT NULL,
    [MemberEmail] nvarchar(50)  NULL,
    [MemberPassword] nvarchar(50)  NULL
);
GO

-- Creating table 'USERS'
CREATE TABLE [dbo].[USERS] (
    [UserID] int  NOT NULL,
    [UserName] nvarchar(50)  NULL,
    [UserPassword] nvarchar(50)  NULL,
    [MemberID] int  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [BoardID] in table 'Boards'
ALTER TABLE [dbo].[Boards]
ADD CONSTRAINT [PK_Boards]
    PRIMARY KEY CLUSTERED ([BoardID] ASC);
GO

-- Creating primary key on [CardID] in table 'CARDs'
ALTER TABLE [dbo].[CARDs]
ADD CONSTRAINT [PK_CARDs]
    PRIMARY KEY CLUSTERED ([CardID] ASC);
GO

-- Creating primary key on [ColumnID] in table 'COLUMNS'
ALTER TABLE [dbo].[COLUMNS]
ADD CONSTRAINT [PK_COLUMNS]
    PRIMARY KEY CLUSTERED ([ColumnID] ASC);
GO

-- Creating primary key on [MemberID] in table 'MEMBERs'
ALTER TABLE [dbo].[MEMBERs]
ADD CONSTRAINT [PK_MEMBERs]
    PRIMARY KEY CLUSTERED ([MemberID] ASC);
GO

-- Creating primary key on [UserID] in table 'USERS'
ALTER TABLE [dbo].[USERS]
ADD CONSTRAINT [PK_USERS]
    PRIMARY KEY CLUSTERED ([UserID] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [BoardID] in table 'COLUMNS'
ALTER TABLE [dbo].[COLUMNS]
ADD CONSTRAINT [FK_BOARD_COLUMNS]
    FOREIGN KEY ([BoardID])
    REFERENCES [dbo].[Boards]
        ([BoardID])
    ON DELETE CASCADE ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_BOARD_COLUMNS'
CREATE INDEX [IX_FK_BOARD_COLUMNS]
ON [dbo].[COLUMNS]
    ([BoardID]);
GO

-- Creating foreign key on [MemberID] in table 'Boards'
ALTER TABLE [dbo].[Boards]
ADD CONSTRAINT [FK_Member_Board]
    FOREIGN KEY ([MemberID])
    REFERENCES [dbo].[MEMBERs]
        ([MemberID])
    ON DELETE CASCADE ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_Member_Board'
CREATE INDEX [IX_FK_Member_Board]
ON [dbo].[Boards]
    ([MemberID]);
GO

-- Creating foreign key on [UserID] in table 'CARDs'
ALTER TABLE [dbo].[CARDs]
ADD CONSTRAINT [FK_USER_CARD]
    FOREIGN KEY ([UserID])
    REFERENCES [dbo].[USERS]
        ([UserID])
    ON DELETE CASCADE ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_USER_CARD'
CREATE INDEX [IX_FK_USER_CARD]
ON [dbo].[CARDs]
    ([UserID]);
GO

-- Creating foreign key on [MemberID] in table 'USERS'
ALTER TABLE [dbo].[USERS]
ADD CONSTRAINT [FK_Member_Users]
    FOREIGN KEY ([MemberID])
    REFERENCES [dbo].[MEMBERs]
        ([MemberID])
    ON DELETE CASCADE ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_Member_Users'
CREATE INDEX [IX_FK_Member_Users]
ON [dbo].[USERS]
    ([MemberID]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------